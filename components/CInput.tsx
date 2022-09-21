import { Roboto_700Bold } from "@expo-google-fonts/roboto"
import { useFonts } from 'expo-font'
import React from "react"
import { StyleSheet, TextInput } from "react-native"

const CInput = (props: any) => {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
  })

  if (!fontsLoaded) return null

  return (
    <TextInput style={styles.textInput} {...props} />
  )
}

const styles = StyleSheet.create({
  textInput: {
    height: 60,
    borderRadius: 10,
    backgroundColor: '#d0d0d0',
    width: '85%',
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto_700Bold',
    color: 'rgba(0, 0, 0, 0.5)'
  }
})
export default CInput
