import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Input from '../components/Ui/Input'
import Button from '../components/Ui/Button'

function Login({navigation, route}) {

  const email = route.params.email;
  const password = route.params.confirmPassword;



  


  return (
    <View>
      <Image source={require('../assets/images/shape.png')} />

      <View style = {styles.content}>
        <Image source={require('../assets/images/mobile-02.png')} />
      </View>

      <View style = {styles.form} >
        <Input textInputConfig={{
          placeholder: 'Enter your email',
          value: email
        }} />
        <Input textInputConfig={{
          placeholder: 'Enter password',
          secureTextEntry: true,
          value: password
        }} />
      </View>

      <Button style={styles.button} onPress={() => {
        navigation.navigate('OverviewScreensExpenses')
      }} >Sign In</Button>
     
    </View>
  )
}



const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    marginTop: 25
  },
  button: {
    marginTop: 35
  }
})

export default Login