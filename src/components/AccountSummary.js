import React, { useContext } from 'react';
import { TransactionContext } from '../contexts/TransactionContext';

const AccountSummary = () => {

    const { transactions } = useContext(TransactionContext);

    const amounts = transactions.map( tran => tran.amount );

    const income = amounts
        .filter( amount => amount > 0 )
        .reduce( (total, inc) => total+=inc , 0)
        .toFixed(2);


    const expense = amounts
        .filter( amount => amount < 0 )
        .reduce( (total, exp) => total+=exp, 0)
        .toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">${income}</p>
            </div>

            <div>
                <h4>Expense</h4>
                <p className="money minus">${Math.abs(expense)}</p>
            </div>
        </div>
    )
}


export default AccountSummary;