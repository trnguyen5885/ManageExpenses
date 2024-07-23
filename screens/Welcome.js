import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../components/Ui/Button'
import { GlobalStyles } from '../constants/GlobalStyles'

function Welcome({navigation}) {
    function navigationHandler() {
        navigation.navigate('Register')
    }
  return (
    <View style = {styles.container}>
      <Image source={require('../assets/images/shape.png')} />

      <View style = {styles.content} >
        <Image source={require('../assets/images/mobile-01.png')} />
        <Text style = {styles.title}>Welcome to PayON</Text>
      </View>

      <Button onPress={navigationHandler} >Get Started</Button>
      
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: GlobalStyles.colors.backgroundColor
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        marginTop: 25,
        fontSize: 25,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primaryColor
    }
})

export default Welcome