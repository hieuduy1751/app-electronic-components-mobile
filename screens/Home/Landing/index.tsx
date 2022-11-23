import {
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  View,
  Text,
  FlatList
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import CProduct from '../../../components/CProduct';

const Landing = ({ navigation }: any) => {
  const logo = require('../../../assets/images/horizontal-logo.png');
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');

  const mockData = [
    {
      id: 1,
      name: 'MacBook Pro 16-inch (2021) ',
      price: 2499,
      image: require('../../../assets/images/macbook16.png'),
      navigation
    },
    {
      id: 2,
      name: 'Iphone 14 Promax màu tím ',
      price: 2499,
      image: require('../../../assets/images/iphone14_purple.jpg'),
      navigation
    },
    {
      id: 3,
      name: 'Iphone 14 Promax màu trắng ',
      price: 2399,
      image: require('../../../assets/images/iphone14_white.jpg'),
      navigation
    },
    {
      id: 4,
      name: 'Asus Zenbook 14 inch ',
      price: 2499,
      image: require('../../../assets/images/asus_zenbook.jpg'),
      navigation
    },
    {
      id: 5,
      name: 'Asus Zenbook 13 inch',
      price: 2499,
      image: require('../../../assets/images/asus_zenbook14.jpg'),
      navigation
    },
  ]

  useEffect(() => {
    // TODO: Fetch data from API
  }, [searchInput]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F4FAFF',
      }}
    >
      <View
        style={{
          height: 80,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 30,
          alignItems: 'center',
          backgroundColor: '#F4FAFF',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.05,
          shadowRadius: 10,
          elevation: 5,
        }}
      >
        <TouchableOpacity>
          <MaterialIcons name="menu" size={24} color="black" />
        </TouchableOpacity>
        {showSearch ? (
          <View style={{
            maxWidth: 200
          }}>
            <TextInput
              value={searchInput}
              onChangeText={setSearchInput}
              placeholder="Search for products..."
            />
          </View>
        ) : (
          <TouchableOpacity
            style={{
              marginBottom: 15,
            }}
          >
            <Image source={logo} />
          </TouchableOpacity>
        )}
        {showSearch ? (
          <TouchableOpacity
            onPress={() => {
              setShowSearch(false);
              setSearchInput('');
            }}
          >
            <MaterialIcons name="close" size={24} color="black" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setShowSearch(true)}>
            <MaterialIcons name="search" size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>
      <View style={{
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        alignItems: 'center',
      }}>
        <Text style={{
          fontWeight: 'bold',
          fontSize: 14,
        }}>
          Hot Deals
        </Text>
        <TouchableOpacity>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 14,
            textDecorationLine: 'underline',
            color: '#A6A6AA'
          }}>
            SEE ALL
          </Text>
          </TouchableOpacity>
      </View>
      <View style={{
        width: '100%',
        paddingHorizontal: 30
      }}>
        <FlatList data={mockData} renderItem={CProduct} keyExtractor={(item) => item.id.toString()} horizontal extraData={{
          navigation
        }} />
      </View>
    </SafeAreaView>
  );
};

export default Landing;
