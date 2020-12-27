import React, { useContext } from 'react';
import { TransactionContext } from '../contexts/TransactionContext';
import Transaction from './Transaction';

const TransactionHistory = () => {

    const { transactions } = useContext(TransactionContext);

    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                
                { transactions.map( transaction => (
                    <Transaction 
                        key={transaction.id}
                        transaction={transaction}
                    />
                )) }

                
            </ul>
        </div>
    )
}

export default TransactionHistory;