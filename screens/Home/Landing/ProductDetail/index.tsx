import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ProductDetail = ({ route }: any) => {
  const { item } = route.params;
  return (
    <SafeAreaView
      style={{
        width: '100%',
        flex: 1,
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
            height: 5,
          },
          shadowOpacity: 0.05,
          shadowRadius: 3.84,
          elevation: 5,
          zIndex: 100,
        }}
      >
        <TouchableOpacity onPress={() => item.navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 250,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F4FAFF',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.05,
          shadowRadius: 3.84,
          elevation: 5,
          zIndex: 10,
        }}
      >
        <Image
          style={{
            width: 300,
            height: 200,
          }}
          source={item.image}
        />
      </View>
      <View
        style={{
          width: '100%',
          height: 100,
          paddingHorizontal: 30,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#F4FAFF',
        }}
      >
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 28,
          }}
        >
          {item.name}
        </Text>
      </View>
      <View
        style={{
          height: 100,
          width: '100%',
          paddingHorizontal: 30,
          flexGrow: 1,
          backgroundColor: '#F4FAFF',
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            marginBottom: 10
          }}
        >
          Colors
        </Text>
        <View
          style={{
            width: '100%',
            height: 40,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <FlatList
            data={[
              {
                color: '#774488',
                name: 'Purple',
              },
              {
                color: '#C9A19C',
                name: 'Brown',
              },
              {
                color: '#A1C89B',
                name: 'Green',
              },
            ]}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 40,
                  borderRadius: 10,
                  backgroundColor: item.color,
                  marginRight: 10
                }}
              />
            )}
            keyExtractor={(item) => item.color}
            horizontal
          />
        </View>
        <View style={{
          width: '100%',
          height: 100,
          marginTop: 30
        }}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 14,
            marginBottom: 15 
          }}>
            Product information
          </Text>
          <Text style={{
            fontSize: 12,
            color: '#212529',
            fontWeight: '500'
          }}>
            {item.description}
          </Text>
        </View>
        <View style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 10
        }}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 28
          }}>
            Total
          </Text>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 28
          }}>
            $ {item.price}
          </Text>
        </View>
        <View style={{
          width: '100%',
          height: 60,
          marginVertical: 20
        }}>
          <TouchableOpacity style={{
            width: '100%',
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'orange',
            borderRadius: 10
          }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: 'white'
            }}>
              ADD TO CART
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;
