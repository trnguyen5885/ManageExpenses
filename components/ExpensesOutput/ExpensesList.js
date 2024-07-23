import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpeneseItem from './ExpeneseItem'

function renderExpenseItem(itemData) {
  return <ExpeneseItem {...itemData.item} />
}

function ExpensesList({expeneses}) {

  return <FlatList data={expeneses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id} />
}



const styles = StyleSheet.create({})

export default ExpensesList