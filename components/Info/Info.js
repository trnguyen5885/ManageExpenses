import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { GlobalStyles } from '../../constants/GlobalStyles'

function Info({name}) {
    
  return (
    <View style = {styles.container}>
        <Text style = {styles.name} > Hello {name}</Text>
        <View style = {styles.avatarContainer}>
            <Image style = {styles.avatar} source={require('../../assets/images/avatar.jpeg')} />
        </View>
        
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    name: {
        fontSize: 18,
        fontStyle: 'italic',
    },
    avatarContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        overflow: 'hidden'
    },
    avatar: {
        width: '100%',
        height: '100%'
    }
})

export default Info