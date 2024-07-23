import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constants/GlobalStyles'

function Button({children, onPress, style}) {
  return (
    <Pressable onPress={onPress} style = {({pressed}) => [styles.button, style ,pressed ? styles.buttonPressed : null]}>
      <Text style = {styles.buttonText} >{children}</Text>
    </Pressable>
  )
}



const styles = StyleSheet.create({
    button: {
        marginTop: 250,
        marginHorizontal: 20,
        borderRadius: 8,
        backgroundColor: GlobalStyles.colors.primaryColor,
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 8
        
    },
    buttonPressed: {
        opacity: 0.75
    },
    buttonText: {
        padding: 20,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: GlobalStyles.colors.subColor
    }
})

export default Button