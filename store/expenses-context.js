import { createContext, useReducer } from "react";


export const ExpensesContext = createContext({
    expenses: [],
    setExpenses: (expenses) => {},
    addExpense: ({description, date, amount}) => {},
    updateExpense: (id, {description, date, amount}) => {},
    deleteExpense: (id) => {},
})



function expensesReducer(state, action) {
    switch(action.type) {
        case 'ADD':
            return [action.payload, ...state];
        case 'SET':
            const inverted = action.payload.reverse();
            return inverted;
        case 'UPDATE':
            const idUpdateExpense = state.findIndex((expense) => expense.id === action.payload.id);
            const itemUpdateExpense = state[idUpdateExpense];
            const itemUpdatedExpense = {...itemUpdateExpense, ...action.payload.data};
            const itemUpdateFinish = [...state];
            itemUpdateFinish[idUpdateExpense] = itemUpdatedExpense;
            return itemUpdateFinish;
        case 'DELETE':
            return state.filter((expense) => expense.id != action.payload);
        default: 
            return state;
    }

    
}

function ExpensesContextProvider({children}) {

    const [expensesState, dispatch] = useReducer(expensesReducer, []);

    function addExpense(expensesData) {
        dispatch({type: 'ADD', payload: expensesData})
    }

    function setExpenses(expenses) {
      dispatch({type: 'SET', payload: expenses})
    }

    function updateExpense(id, expensesData) {
        dispatch({type: 'UPDATE', payload: {id: id, data: expensesData}})
    }

    function deleteExpense(id) {
        dispatch({type: 'DELETE', payload: id})
    }

    const values = {
        expenses: expensesState,
        setExpenses: setExpenses,
        addExpense: addExpense,
        updateExpense: updateExpense,
        deleteExpense: deleteExpense,
    }

    return <ExpensesContext.Provider value={values}>
        {children}
    </ExpensesContext.Provider>
}

export default ExpensesContextProvider;