import { Pressable, StyleSheet, Text, View } from 'react-native'
import { GlobalStyles } from '../../constants/GlobalStyles';
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

function ExpeneseSummary({periodName, expenses, onPress}) {

    const navigation = useNavigation();

    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount
    }, 0)

    function pressedHandler() {
        navigation.navigate('ManageExpenses')
    }

  return (
    <View style = {styles.container}>
      <Text style = {styles.periodName}>{periodName}</Text>
      <Text style = {styles.expensesSum} >${expensesSum.toFixed(2)}</Text>

    <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>

        <View  >
            <Text style = {styles.cardNumber}>Cardnumber</Text>
            <Text style = {styles.number}>92534454029999</Text>
        </View>

        <View>
            <Pressable 
            onPress={pressedHandler}
            style = {({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}>
                <AntDesign name='plus' color={GlobalStyles.colors.primaryColor} size={24} />
            </Pressable>
        </View>

    </View>
      

      
      
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
        width: '100%',
        minHeight: 180,
        marginBottom: 25,
        borderRadius: 15,
        backgroundColor: GlobalStyles.colors.primaryColor
    },
    periodName: {
        fontSize: 18,
        marginTop: 15,
        marginLeft: 20,
        color: GlobalStyles.colors.subColor,
    },
    expensesSum: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        color: GlobalStyles.colors.subColor
    },
    cardNumber: {
        fontSize: 14,
        marginTop: 20,
        marginLeft: 20,
        fontStyle: 'italic',
        color: GlobalStyles.colors.backgroundColor,
    },
    number: {
        fontSize: 16,
        marginTop: 10,
        marginLeft: 20,
        fontWeight: 'bold',
        color: GlobalStyles.colors.backgroundColor,
    },
    button: {
        marginTop: 25,
        marginHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',    
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: GlobalStyles.colors.subColor
    },
    buttonPressed: {
        opacity: 0.75
    }
    
})

export default ExpeneseSummary