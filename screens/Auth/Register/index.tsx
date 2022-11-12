import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useSelector } from 'react-redux';
import CButton from '../../../components/CButton';
import CInput from '../../../components/CInput';
import HideKeyboard from '../../../components/HideKeyboard';
import GlobalStyles from '../../../constants/GlobalStyles';

const Register = ({ navigation }: { navigation: any }) => {
  const [account, setAccount] = useState<{
    username: string;
    password: string;
    confirmPassword: string;
  }>({
    username: '',
    password: '',
    confirmPassword: '',
  });
  
  const loading = useSelector((state: any) => state.user.loading);

  const icon = require('../../../assets/images/icon.png');

  const handleRegister = () => {
    navigation.navigate('Login')
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView
      style={{
        ...GlobalStyles.container,
        ...GlobalStyles.dFlex,
        ...GlobalStyles.centeredFlex,
      }}
    >
      <HideKeyboard>
        <View style={styles.loginContainer}>
          <View style={styles.imageContainer}>
            <Image source={icon} />
          </View>
          <View style={styles.formContainer}>
            <CInput
              placeholder="Username"
              textContentType="usename"
              value={account.username}
              onChangeText={(text: string) => {
                setAccount((state: any) => ({
                  username: text,
                  password: state.password,
                  confirmPassword: state.confirmPassword
                }));
              }}
            />
            <CInput
              placeholder="Password"
              secureTextEntry={true}
              textContentType="password"
              value={account.password}
              onChangeText={(password: string) => {
                setAccount((prev: any) => ({
                  username: prev.username,
                  password,
                  confirmPassword: prev.confirmPassword
                }));
              }}
            />
            <CInput
              placeholder="Confirm Password"
              secureTextEntry={true}
              textContentType="password"
              value={account.confirmPassword}
              onChangeText={(confirmPassword: string) => {
                setAccount((prev: any) => ({
                  username: prev.username,
                  password: prev.password,
                  confirmPassword
                }));
              }}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <CButton
              btnProps={{
                onPress: handleLogin,
              }}
              title="REGISTER"
              backgroundColor="#FB8500"
            />
            <CButton
              btnProps={{
                onPress: handleRegister,
              }}
              title="Login"
              textStyles={styles.registerText}
              backgroundColor="transparent"
            />
          </View>
        </View>
      </HideKeyboard>
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={'large'} color="#FB8500" />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100%',
  },
  imageContainer: {
    height: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 230,
    justifyContent: 'space-between',
  },
  buttonsContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 150,
  },
  registerText: {
    color: '#000',
    textDecorationLine: 'underline',
  },
  loadingContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '120%',
    height: '120%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Register;
