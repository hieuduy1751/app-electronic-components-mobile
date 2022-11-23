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

const Category = ({ navigation }: any) => {
  const logo = require('../../../assets/images/horizontal-logo.png');
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');
  const numberCollumns = 2;

  const filtered = () => mockData.filter(eachMockData => eachMockData.name.toLowerCase()
                                    .includes(searchInput.toLowerCase()))

  const mockData = [
    {
      id: 1,
      name: 'MacBook Air M1 256GB 2020',
      price: 1400,
      image: require('../../../assets/images/macbook_air_22.png'),
      description:'Loại card đồ họa : GPU 7 nhân, 16 nhân Neural Engine \nDung lượng RAM 8GB \nỔ cứng: 256GB SSD \nPin: 49.9-watt-hour lithium-polymer \nTính năng khác: Cảm biến vân tay Touch ID',
      navigation
    },
    {
      id: 2,
      name: 'MacBook Air M2 256GB 2022',
      price: 1900,
      image: require('../../../assets/images/macbook_air_m2_4_1_1.jpg'),
      description:'Loại card đồ họa : GPU 8 nhân, 16 nhân Neural Engine \nDung lượng RAM 8GB \nỔ cứng: 256GB SSD \nPin: 55.9-watt-hour lithium-polymer \nTính năng khác: 4 loa trang bị công nghệ dolby atmos',
      navigation
    },
    {
      id: 3,
      name: 'Asus Rog Strix Scar 15 ',
      price: 2800,
      image: require('../../../assets/images/asus1.jpeg'),
      description:'Loại card đồ họa : GPU NVIDIA Geforce RTX 3080 \nDung lượng RAM 32GB \nỔ cứng: 256GB SSD \nPin: 90WHrs, 4S1P, 4-cell Li-ion \nTính năng khác: Windows 11 Home',
      navigation
    },
    {
      id: 4,
      name: 'ASUS Zenbook Pro 14 Duo',
      price: 1300,
      image: require('../../../assets/images/asus2.png'),
      description:'Loại card đồ họa : OLED tỷ lệ 16:10 \nDung lượng RAM 16GB \nỔ cứng: 256GB SSD \nPin: 60WHrs, 4S1P, 4-cell Li-ion \nTính năng khác: Windows 11 Home',
      navigation
    },
    {
      id: 5,
      name: 'Dell Vostro 5620 P117F001AGR',
      price: 1250,
      image: require('../../../assets/images/dell1.jpeg'),
      description:'Loại card đồ họa : OLED tỷ lệ 16:10 \nDung lượng RAM 16GB \nỔ cứng: 256GB SSD \nPin: 60WHrs, 4S1P, 4-cell Li-ion \nTính năng khác: Windows 11 Home',
      navigation
    },
    {
      id: 6,
      name: 'Dell Gaming G15 5511',
      price: 1450,
      image: require('../../../assets/images/dell2.jpeg'),
      description:'Loại card đồ họa : OLED tỷ lệ 16:10 \nDung lượng RAM 16GB \nỔ cứng: 256GB SSD \nPin: 60WHrs, 4S1P, 4-cell Li-ion \nTính năng khác: Windows 11 Home',
      navigation
    }
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
        
        <TouchableOpacity>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 14,
            textDecorationLine: 'underline',
            color: '#A6A6AA'
          }}>
            MACBOOK
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 14,
            textDecorationLine: 'underline',
            color: '#A6A6AA'
          }}>
            ASUS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 14,
            textDecorationLine: 'underline',
            color: '#A6A6AA'
          }}>
            DELL
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 14,
            textDecorationLine: 'underline',
            color: '#A6A6AA'
          }}>
            HP
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 14,
            textDecorationLine: 'underline',
            color: '#A6A6AA'
          }}>
            LENOVO
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{
        width: '100%',
        paddingHorizontal: 30
      }}>
        <FlatList data={filtered()} 
                  renderItem={CProduct} 
                  keyExtractor={(item) => item.id.toString()} 
                  extraData={{navigation}} 
                  numColumns={numberCollumns}
        />
      </View>
    </SafeAreaView>
  );
};

export default Category;
