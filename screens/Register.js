import { StyleSheet, Text, View, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/Ui/Input'
import { GlobalStyles } from '../constants/GlobalStyles'
import Button from '../components/Ui/Button'

function Register({navigation}) {

  const [inputValues, setInputValues] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  function inputChangedHandler(inputIdentifier ,enteredText) {
    setInputValues((currentInput) => {
      return {
        ...currentInput,
        [inputIdentifier]: enteredText
      }
    })
  }



  function confirmInput() {

      if(inputValues.password!==inputValues.confirmPassword) {
        Alert.alert('Invalid Input', 'Input cannot the same',[{
          text: 'OKAY',
          onPress: () => {},
          style: 'default'
        }
        ])
      } else {
        navigation.navigate('Login', {
          email: inputValues.email,
          confirmPassword: inputValues.confirmPassword
        })
      }
  }

  return (
    <View style = {styles.container}>
      <Image source={require('../assets/images/shape.png')} />

        <View style = {styles.content}>
            <Text style = {styles.title}>Welcome Onboard!</Text>
        </View>

        <View style = {styles.containerInput}>
            <Input textInputConfig={{
              placeholder: 'Enter your full name',
              onChangeText: inputChangedHandler.bind(this, 'fullname'),
              value: inputValues.fullname
            }} />
            <Input textInputConfig={{
              placeholder: 'Enter your emall',
              autoCapitalize: 'none',
              onChangeText: inputChangedHandler.bind(this, 'email'),
              value: inputValues.email
              
            }} />
            <Input textInputConfig={{
              placeholder: 'Enter password',
              secureTextEntry: true,
              onChangeText: inputChangedHandler.bind(this, 'password'),
              value: inputValues.password
            }}/>
            <Input textInputConfig={{
              placeholder: 'Confirm Password',
              secureTextEntry: true,
              onChangeText: inputChangedHandler.bind(this, 'confirmPassword'),
              value: inputValues.confirmPassword
            }} />
        </View>

        <Button style={styles.button} onPress={confirmInput}>Register</Button>
      
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: GlobalStyles.colors.backgroundColor
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        color: GlobalStyles.colors.primaryColor
    },
    containerInput: {
      marginTop: 35
    },
    button: {
      marginTop: 50
    }
})

export default Register