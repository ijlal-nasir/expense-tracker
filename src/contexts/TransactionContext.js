import { createContext, useReducer } from "react";
import TransactionReducer from "./TransactionReducer";


const initialState = {
    transactions: []
}

export const TransactionContext = createContext();

export const TransactionProvider = ( {children} ) => {

    const [state, dispatch] = useReducer(TransactionReducer, initialState);

    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }
    
    return(
        <TransactionContext.Provider value={{ transactions: state.transactions, deleteTransaction, addTransaction }}>
            { children }
        </TransactionContext.Provider>
    )
}