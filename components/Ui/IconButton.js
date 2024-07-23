import { Pressable, StyleSheet, Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react'
import { GlobalStyles } from '../../constants/GlobalStyles';

function IconButton({icon, color, size, onPress}) {
  return (
    <Pressable
    onPress={onPress}
    style = {({pressed}) => pressed ? styles.pressed : null}
    >
        <View style = {styles.buttonContainer}>
            <AntDesign name={icon} color={color} size={size} />
        </View>
            
      
    </Pressable>
  )
}



const styles = StyleSheet.create({
    buttonContainer: {
        padding: 6,
        borderRadius: 24,
    },
    pressed: {
        opacity: 0.75
    }
})

export default IconButton