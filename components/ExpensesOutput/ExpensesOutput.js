import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpeneseSummary from './ExpeneseSummary'
import ExpensesList from './ExpensesList'



function ExpensesOutput({periodName, expenses}) {

  return (
    <View style = {styles.container}>
      <ExpeneseSummary periodName={periodName} expenses={expenses} />
      <ExpensesList expeneses={expenses} />

      
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 15,
    paddingBottom: 0,
  }
})

export default ExpensesOutput