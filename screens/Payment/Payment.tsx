import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Text,
  TouchableOpacity
  } from 'react-native';
  import CheckBox from '@react-native-community/checkbox';
  import { RadioButton } from 'react-native-paper';
export default function Payment() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [checked, setChecked] = React.useState('first');

  return (
    <View style={{flexDirection:'column'}}>
        <View style={{flexDirection:'row', margin: 20,}}>
            <Text style={{fontWeight:'bold', fontSize:17}}>Shipping Information</Text>
            <Text style={{position:'absolute', left:300, fontSize:17, color:'#F6AE2D', fontWeight:'bold'}}>Change</Text>
        </View>
        <View style={styles.infomationComp}>
            <View style={[{flexDirection:'row'}, styles.itemInfomation]}>
              <Image source={require('../../assets/images/Profile.png')} style={{marginTop:10}}/>
              <Text style={styles.itemInfomation}>Pham Quoc Hieu</Text>
            </View>
            <View style={[{flexDirection:'row'}, styles.itemInfomation]}>
              <Image source={require('../../assets/images/Location.png')} style={{marginTop:10}}/>
              <Text style={styles.itemInfomation}>116/50 Duong Quang Ham, Go Vap, Ho Chi Minh City, Vietnam</Text>

            </View>
            <View style={[{flexDirection:'row'}, styles.itemInfomation]}>
              <Image source={require('../../assets/images/Call.png')} style={{marginTop:10}}/>
              <Text style={styles.itemInfomation}>0982701841</Text>

            </View>
        </View>
        <Text style={{fontWeight:'bold', fontSize:17, margin:20}}>Payment method</Text>
        <View style={[styles.infomationComp,{flexDirection:'row', padding:20, alignItems:'center', paddingLeft:40}]}>
              <RadioButton
              value="first"
              status={ checked === 'first' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('first')}
            />
            <Image source={require('../../assets/images/credit-card.png')} style={{borderRadius:10}}/>
            <Text style={styles.itemInfomation}>*** **** *** 187</Text>
        </View>
        <View style={{flexDirection:'column-reverse'}}>
          <View style={{flexDirection:'row', margin:20, marginTop:150}}>
            <Text style={styles.priceTotal}>Total</Text>
            <Text style={[styles.priceTotal,{position:'absolute', left:275}]}>$200</Text>
          </View>
        </View>
        <TouchableOpacity style={{backgroundColor:'#FB8500', alignItems:'center', margin:20, padding:20, borderRadius:20}}>
          <Text style={styles.paymentText}>PAYMENT</Text>
        </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  infomationComp:{
    flexDirection:'column',
    backgroundColor:'#ffff',
    margin: 20,
    borderRadius:20
  }, 
  itemInfomation:{
    margin:10,
    fontSize:17
  }, 
  priceTotal:{
    fontSize:36,
    fontWeight:'bold'
  },
  paymentText:{
    color:'#ffff',
    fontSize:20,
    fontWeight:'bold'
  }
});
