import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constants/GlobalStyles'

function SubButton({children, mode, onPress, style, textStyle}) {
  return (
    <Pressable
    onPress={onPress}
    style = {({pressed}) => pressed ? styles.pressed : null}
    >
        <View style = {[styles.button, mode === 'flat' && styles.flat, style]}>
            <Text style = {[styles.buttonText, mode === 'flat' && styles.flatText, textStyle]} > {children}</Text>
        </View>
    </Pressable>
  )
}



const styles = StyleSheet.create({
    button: {
        minWidth: 70,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        borderRadius: 8,
        backgroundColor: GlobalStyles.colors.primaryColor
    },
    buttonText: {
        fontSize: 14,
        color: GlobalStyles.colors.subColor
    },
    flat: {
        backgroundColor: 'transparent'
    },
    flatText: {
        color: GlobalStyles.colors.primaryColor
    },
    pressed: {
        opacity: 0.75
    }
})

export default SubButton