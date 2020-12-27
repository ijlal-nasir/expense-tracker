import React, { useContext } from 'react';
import { TransactionContext } from '../contexts/TransactionContext';


const Balance = () => {

    const { transactions } = useContext(TransactionContext);

    const amounts = transactions.map( tran => tran.amount );

    const total = amounts.reduce( (total, amount) => total += amount, 0).toFixed(2);
    
    return (
        <div>
            <h4>Current Balance</h4>
            <h1>${total}</h1>
        </div>
    )
}



export default Balance;