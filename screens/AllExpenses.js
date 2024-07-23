import { StyleSheet, Text, View, Platform } from 'react-native';
import { GlobalStyles } from '../constants/GlobalStyles';
import { ExpensesContext } from '../store/expenses-context'
import Info from '../components/Info/Info';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import React, { useContext } from 'react'

function AllExpenses() {

  const expensesCtx = useContext(ExpensesContext)

  return (
    <View style = {styles.screen}>
      <Info name='Nguyen' />
      <ExpensesOutput expenses={expensesCtx.expenses} periodName='Total' />
    </View>
  )
}



const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 68 : 35,
    paddingHorizontal: 25,
    backgroundColor: GlobalStyles.colors.backgroundColor
  }
})

export default AllExpenses