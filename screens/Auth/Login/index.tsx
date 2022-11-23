import React, { useState } from "react"
import { View, SafeAreaView, Image, StyleSheet, Alert, ActivityIndicator } from "react-native"
import CButton from "../../../components/CButton"
import CInput from "../../../components/CInput"
import HideKeyboard from "../../../components/HideKeyboard"
import GlobalStyles from "../../../constants/GlobalStyles"

const Login = ({ navigation }: { navigation: any }) => {
  const [account, setAccount] = useState<{ username: string, password: string }>({
    username: 'admin',
    password: 'admin'
  })
  const [loading, setLoading] = useState(false)

  const icon = require("../../../assets/images/icon.png")

  const handleLogin = () => {
    // fake login logic
    if (account.username === 'admin' && account.password === 'admin') {
      setLoading(true)
      setTimeout(() => {
        Alert.alert(
          "Login Success",
        )
        setLoading(false)
        navigation.navigate('Home', { screen: 'Landing' })
      }, 1000)
    }
  }

  const handleRegister = () => {
    console.log('register...')
    navigation.navigate('Register')
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
                    password: state.password
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
                  password
                }))
              }}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <CButton
              btnProps={{
                onPress: handleLogin
              }}
              title="LOGIN"
              backgroundColor="#FB8500"
            />
            <CButton
              btnProps={{
                onPress: handleRegister
              }}
              title="Register"
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
    height: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 150,
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

export default Login
