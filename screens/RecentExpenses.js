import { StyleSheet, Text, View, Platform} from 'react-native';
import { GlobalStyles } from '../constants/GlobalStyles';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ExpensesContext } from '../store/expenses-context';
import Info from '../components/Info/Info';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { getDateMinusDays } from '../utils/date';
import { fetchExpenses } from '../utils/http';
import LoadingOverlay from '../components/Ui/LoadingOverlay'
import ErorrOverlay from '../components/Ui/ErorrOverlay';


function RecentExpenses() {
  const [isFetchingData, setIsFetchingData] = useState(true);
  const [erorr, setErorr] = useState();
  const expensesCtx = useContext(ExpensesContext);

  

  useEffect(() => {
    async function getExpenses() {
      setIsFetchingData(true);
      try {
        const expenses = await fetchExpenses();
        expensesCtx.setExpenses(expenses);

      } catch (error) {
        setErorr('Could not fetching data')
      }
      
      setIsFetchingData(false)
      
      
    }

    getExpenses();
    
  },[]);

  function errorHandler() {
    setErorr(null);
  }

  if(erorr && !isFetchingData) {
    return <ErorrOverlay messenge={erorr} onConfirm={errorHandler} />
  }

  if(isFetchingData) {
    return <LoadingOverlay />
  }

  

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7)
    return expense.date > date7DaysAgo;
  })

  return (
    <View style = {styles.screen}>
      <Info name='Nguyen' />
      <ExpensesOutput expenses={recentExpenses} periodName='Last 7 days' />
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

export default RecentExpenses