import { StyleSheet, Text, View } from 'react-native'
import SubButton from './SubButton'
import React from 'react'
import { GlobalStyles } from '../../constants/GlobalStyles'

function ErorrOverlay({messenge, onConfirm}) {
  return (
    <View style = {styles.container}>
      <Text style = {[styles.title, styles.text]}>An Error Occured</Text>
      <Text style = {[styles.messenge, styles.text]}  >{messenge}</Text>
      <SubButton style={styles.buttonError} textStyle={styles.textErorr} onPress={onConfirm}>Okay</SubButton>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        backgroundColor: 'black'
    },
    text: {
        textAlign: 'center',
        color: GlobalStyles.colors.error600,
        marginBottom: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    messenge: {
        fontSize: 14
    },
    buttonError: {
        backgroundColor: 'black',
    },
    textErorr: {
        color: GlobalStyles.colors.error600
    }

})

export default ErorrOverlay
