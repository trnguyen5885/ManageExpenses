import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { GlobalStyles } from '../../constants/GlobalStyles';
import React from 'react'


function ExpenseInput({label, textInputConfig, style, invalid}) {

    const inputStyles = [styles.input]

    if(textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiple)
    }

    if(invalid) {
        inputStyles.push(styles.inputErorr)
    }

  return (
    <View style = {[styles.container, style]}>
      <Text style = {[styles.label, invalid && styles.inputErorrLabel]} >{label}</Text>
      <TextInput style = {inputStyles} {...textInputConfig} />
    </View>
  )
}

export default ExpenseInput

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 6,
        marginVertical: 10,
    },
    label: {
        fontSize: 14,
        fontStyle: 'italic'
    },
    input: {
        marginTop: 8,
        padding: 8,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: GlobalStyles.colors.primaryColor,
    },
    inputMultiple: {
        minHeight: 80,
        textAlignVertical: 'top'
    },
    inputErorrLabel: {
        color: GlobalStyles.colors.error600
    },

    inputErorr: {
        borderColor: GlobalStyles.colors.error600
    }
})