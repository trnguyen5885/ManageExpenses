import { Pressable, StyleSheet, Text, View } from 'react-native';
import { getFormattedDate } from '../../utils/date';
import { GlobalStyles } from '../../constants/GlobalStyles'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

function ExpeneseItem({id, description, date, amount, onPress}) {

  const navigation = useNavigation();
  function expenseItemPressHandler() {
    navigation.navigate('ManageExpenses', {
      id: id
    })
  }
  

  return (
    <Pressable

     onPress={expenseItemPressHandler}
     style = {({pressed}) => [styles.container, pressed ? styles.pressed : null]}>

      <View>
        <Text style = {styles.desc}>{description}</Text>
        <Text style = {styles.date} >{getFormattedDate(date)}</Text>
      </View>

      <View style = {styles.amountContaier} >
         <Text style = {styles.amount} >{amount}</Text>
      </View>
     
    </Pressable>
  )
}



const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: GlobalStyles.colors.backgroundColor,
    borderWidth: 2,
    borderColor: GlobalStyles.colors.primaryColor,
    borderRadius: 8,
  },
  desc: {
    fontSize: 16,
    color: GlobalStyles.colors.primaryColor,
    fontWeight: 'bold'
  },
  date: {
    marginTop: 8,
    color: GlobalStyles.colors.primaryColor
  },
  amountContaier: {
    minWidth: 85,
    paddingHorizontal: 16,
    paddingVertical: 8,
    
    backgroundColor: GlobalStyles.colors.primaryColor,
    borderRadius: 8
  },
  amount: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: GlobalStyles.colors.subColor
  },
  pressed: {
    opacity: 0.75
  }
  
})

export default ExpeneseItem