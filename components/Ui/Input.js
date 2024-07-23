import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { GlobalStyles } from '../../constants/GlobalStyles'

function Input({textInputConfig}) {
  return (
    <View style = {styles.input}>
      <TextInput {...textInputConfig} />
    </View>
  )
}



const styles = StyleSheet.create({
  input: {
    marginTop: 15,
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    borderRadius: 30,
    backgroundColor: GlobalStyles.colors.subColor
  }
})

export default Input