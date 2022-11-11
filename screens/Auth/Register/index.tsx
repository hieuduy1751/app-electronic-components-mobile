import React, { useState } from 'react'
import { View, Text, Alert, StyleSheet, SafeAreaView, Image, ActivityIndicator } from 'react-native'
import CButton from '../../../components/CButton'
import CInput from '../../../components/CInput'
import HideKeyboard from '../../../components/HideKeyboard'
import GlobalStyles from '../../../constants/GlobalStyles'

const Register = ({ navigation }: any) => {
  const [account, setAccount] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  })
  const [loading, setLoading] = useState(false)
  const icon = require('../../../assets/images/icon.png')

  const handleRegister = () => {
    setLoading(true)
    if (account.password !== account.confirmPassword) {
      setTimeout(() => {
        Alert.alert(
          'Error',
          'Password does not match'
          )
        setLoading(false)
      }, 1000)
      return
    }
    setTimeout(() => {
      Alert.alert(
        'Success',
        'Registed successful'
      )
      setLoading(false)
      navigation.navigate('Login')
    }, 1000)
  }

  const handleLogin = () => {
    navigation.navigate('Login')
  }

  return (
    <SafeAreaView
      style={{
        ...GlobalStyles.container,
        ...GlobalStyles.dFlex,
        ...GlobalStyles.centeredFlex
      }}>
      <HideKeyboard>
        <View style={styles.loginContainer}>
          <View style={styles.imageContainer}>
            <Image source={icon} />
          </View>
          <View style={styles.formContainer}>
            <CInput placeholder="Username"
              textContentType="usename"
              value={account.username}
              onChangeText={(text: string) => {
                setAccount((state: any) => (
                  {
                    username: text,
                    password: state.password,
                    confirmPassword: state.confirmPassword
                  }
                ))
              }}
            />
            <CInput placeholder="Password"
              x secureTextEntry={true}
              textContentType="password"
              value={account.password}
              onChangeText={(password: string) => {
                setAccount((prev: any) => ({
                  username: prev.username,
                  password,
                  confirmPassword: prev.confirmPassword
                }))
              }}
            />
            <CInput placeholder="Confirm Password"
              x secureTextEntry={true}
              textContentType="password"
              value={account.confirmPassword}
              onChangeText={(confirmPassword: string) => {
                setAccount((prev: any) => ({
                  username: prev.username,
                  password: prev.password,
                  confirmPassword
                }))
              }}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <CButton
              btnProps={{
                onPress: handleRegister
              }}
              title="REGISTER"
              backgroundColor="#FB8500"
            />
            <CButton
              btnProps={{
                onPress: handleLogin
              }}
              title="Login"
              textStyles={styles.registerText}
              backgroundColor="transparent"
            />
          </View>
        </View>
      </HideKeyboard>
      {loading && <View style={styles.loadingContainer}>
        <ActivityIndicator size={'large'} color="#FB8500" />
      </View>}
    </SafeAreaView> 
  )
}

const styles = StyleSheet.create({
  loginContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100%'
  },
  imageContainer: {
    height: '25%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
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
    textDecorationLine: 'underline'
  },
  loadingContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '120%',
    height: '120%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Register