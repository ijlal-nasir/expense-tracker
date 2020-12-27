import { createContext, useReducer } from "react";
import TransactionReducer from "./TransactionReducer";


const initialState = {
    transactions: [
        {
            id: 1,
            description: 'Income one',
            transactionAmount: 1000
        },
        {
            id: 2,
            description: 'Expense One',
            transactionAmount: -500
        }
    ]
}

export const TransactionContext = createContext();

export const TransactionProvider = ( {children} ) => {

    const [state, dispatch] = useReducer(TransactionReducer, initialState)
    
    return(
        <TransactionContext.Provider value={{ transactions: state.transactions }}>
            { children }
        </TransactionContext.Provider>
    )
}