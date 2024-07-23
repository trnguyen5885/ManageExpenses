import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../constants/GlobalStyles'

function LoadingOverlay() {
  return (
    <View style = {styles.container}>
      <ActivityIndicator size="large" color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "transparent"
    }
})

export default LoadingOverlay