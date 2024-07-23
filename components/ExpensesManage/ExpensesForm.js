import { StyleSheet, Text, View, Alert} from 'react-native';
import React, { useState } from 'react';
import ExpenseInput from './ExpenseInput';
import SubButton from '../Ui/SubButton';
import { GlobalStyles } from '../../constants/GlobalStyles';

function ExpensesForm({onCancel, onSubmit, submitButtonLabel, defaultValues}) {

    const [inputs, setInputs] = useState({
        amount: { value: defaultValues ? defaultValues.amount.toString() : ''
                , isValid: true},
        date: {value: defaultValues ? defaultValues.date.toISOString().slice(0,10) : '', isValid: true},
        description: {value: defaultValues ? defaultValues.description : '', isValid: true}
    });

    function inputValuesHandler(inputIdentifier , enteredValues) {
        setInputs((currentInputs) => {
            return {
                ...currentInputs,
                [inputIdentifier]: {value: enteredValues, isValid: true}
            }
        })
    }

    function submitHandler() {
        const expensesData = {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value
        }

        const amountIsValid = !isNaN(expensesData.amount) && expensesData.amount > 0;
        const dateIsValid = expensesData.date.toString() !== 'Invalid Date';
        const descIsValid = expensesData.description.trim().length > 0;

        if(!amountIsValid || !dateIsValid || !descIsValid) {
            setInputs((currentInputs) => {
                return {
                    amount: {value: currentInputs.amount.value, isValid: amountIsValid},
                    date: {value: currentInputs.date.value, isValid: dateIsValid},
                    description: {value: currentInputs.description.value, isValid: descIsValid}
                }
            })
            return;
        }

        onSubmit(expensesData)
    }

    const formIsInvalid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid


  return (
    <View style = {styles.container}>

        <View style = {styles.inputsRow} >
            <ExpenseInput style={styles.inputFlex} label='Amount'
            invalid = {!inputs.amount.isValid}
            textInputConfig={{
                keyboardType: 'decimal-pad',
                onChangeText: inputValuesHandler.bind(this, 'amount'),
                value: inputs.amount.value
            }} />
            <ExpenseInput style={styles.inputFlex} label='Date' 
            invalid = {!inputs.date.isValid}
            textInputConfig={{
                keyboardType: 'decimal-pad',
                placeholer: 'YYYY-MM-DD',
                maxLength: 10,
                onChangeText: inputValuesHandler.bind(this, 'date'),
                value: inputs.date.value,
            }} />
        </View>

        <View>
            <ExpenseInput label='Description' 
            invalid = {!inputs.description.isValid}
            textInputConfig={{
                multiline: true,
                onChangeText: inputValuesHandler.bind(this, 'description'),
                value: inputs.description.value
            }} />
        </View>

        {formIsInvalid && <Text style = {styles.errorInputs} >Please check your inputs</Text>}

        <View style = {styles.buttonsContainer} >
            <SubButton mode='flat' onPress={onCancel}>CANCEL</SubButton>
            <SubButton onPress={submitHandler}>
                {submitButtonLabel ? 'UPDATE' : 'ADD'}
            </SubButton>
        </View>
      
      
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
        padding: 12,
    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputFlex: {
        flex: 1
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: 10
    },
    errorInputs: {
        textAlign: 'center',
        color: GlobalStyles.colors.error600,
        margin: 12
    }
})

export default ExpensesForm