import React, { useContext } from 'react'
import { TransactionContext } from '../contexts/TransactionContext';

const Transaction = ( { transaction } ) => {

    const { deleteTransaction } = useContext(TransactionContext);

    const sign = transaction.amount > 0 ? '+' : '-';
    const type = transaction.amount > 0 ? 'plus' : 'minus';

    return (
        <li className={type}>
            {transaction.description}
            <span>{sign}${Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>X</button>
        </li>
    )
}

export default Transaction;
