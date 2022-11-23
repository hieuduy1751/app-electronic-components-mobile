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

const Account = ({ navigation }: any) => {
  const logo = require('../../../assets/images/horizontal-logo.png');
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');
  const numberCollumns = 2;

  
  
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
          <Image  style={{
              width: 50,
              height: 50,
          }}
          source={require('../../../assets/images/avata.png')}></Image>
        </TouchableOpacity>
        <Text style={{
              fontSize:20,
              alignItems: 'center',
              right:50
          }}> Huynh Vo Hoang Long</Text>
      
        
      </View>
      <View style={{
        width: '100%',
        height: 700,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        // alignItems: 'center',
      }}>
        
      <View style={{ flex: 1,top:30,height:300}}>
      <Text style={{
              fontSize:20, 
              fontWeight: 'bold',   
          }}>Đơn hàng</Text>
       <Text style={{
              fontSize:14,
          }}>Bạn đang có một đơn hàng</Text>
      </View>
      <View style={{ flex: 2 ,top:90,height:200}}>
      <Text style={{
              fontSize:20,
              fontWeight: 'bold',
          }}>Địa chỉ nhận hàng</Text>
       <Text style={{
              fontSize:14,
          }}>1 địa điểm</Text>
      </View>

      <View style={{ flex: 3,top:90 ,height:200}}>
      <Text style={{
              fontSize:20,
              fontWeight: 'bold',        
          }}>Số điện thoại</Text>
       <Text style={{
              fontSize:14,     
          }}>Chưa xác minh</Text>
      </View>

      <View style={{ flex: 4,top:90,height:200}}>
      <Text style={{
              fontSize:20,
              fontWeight: 'bold',
          }}>Phương thức thanh toán</Text>
       <Text style={{
              fontSize:14,
          }}>Visa **34</Text>
      </View>
 
      <View style={{ flex: 5,top:90,height:200}}>
      <Text style={{
              fontSize:20,
              fontWeight: 'bold',
          }}>Cài đặt</Text>
       <Text style={{
              fontSize:14,
          }}>Thông báo, mật khẩu</Text>
      </View>

      <View style={{ flex: 6,top:40,height:200}}>
      <Text style={{
              fontSize:20,
              fontWeight: 'bold',
              color:"red"
          }}>Đăng xuất</Text>
       <Text style={{
              fontSize:14,
          }}>Thoát tài khoản này</Text>
      </View>

      </View>
    </SafeAreaView>
  );
};

export default Account;
