import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../constants/GlobalStyles';
import React, { useContext, useState } from 'react';
import IconButton from '../components/Ui/IconButton';
import SubButton from '../components/Ui/SubButton';
import { ExpensesContext } from '../store/expenses-context';
import ExpensesForm from '../components/ExpensesManage/ExpensesForm';
import { storeExpenses } from '../utils/http';
import { updateExpense } from '../utils/http';
import { deleteExpense } from '../utils/http';
import LoadingOverlay from '../components/Ui/LoadingOverlay';


function ManageExpenses({navigation,route}) {
  const [isSubmitting , setIsSubmitting] = useState(false);
  const expensesCtx = useContext(ExpensesContext);

  const idOfExpenseItem = route.params?.id;
  const isEditting = !!idOfExpenseItem;

  const itemSelected = expensesCtx.expenses.find(expense => expense.id === idOfExpenseItem);

  function cancelExpenseHandler() {
    navigation.goBack()
  }

  async function deleteExpenseHandler() {
    setIsSubmitting(true);
    await deleteExpense(idOfExpenseItem)
    // setIsSubmitting(false);
    expensesCtx.deleteExpense(idOfExpenseItem)
    navigation.goBack()
  }

  async function confirmExpenseHandler(expensesData) {
    if(isEditting) {
      setIsSubmitting(true);
      expensesCtx.updateExpense(idOfExpenseItem, expensesData)
      await updateExpense(idOfExpenseItem, expensesData)
      
      
    } else {
      setIsSubmitting(true)
      const id = await storeExpenses(expensesData);
      expensesCtx.addExpense({...expensesData, id: id});
    }
    navigation.goBack()
  }

  if(isSubmitting) {
    return <LoadingOverlay />
  }


  return (
    <View style = {styles.container}>
      <ExpensesForm submitButtonLabel={isEditting}
       onCancel={cancelExpenseHandler}
      onSubmit={confirmExpenseHandler}
      defaultValues={itemSelected} />
      
      
      {isEditting &&
      <View style = {styles.deleteContainer}>
        <IconButton icon='delete' color='#ff3333' size={36} onPress={deleteExpenseHandler} />
      </View>}
    </View>
  )
}


export default ManageExpenses

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.backgroundColor
  },
  deleteContainer: {
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primaryColor
  }
})