import React, {useContext, useState} from 'react';
import { TransactionContext } from '../contexts/TransactionContext';
import uuid from 'react-uuid'

const AddNewTransaction = () => {

    const [description, setDescription] = useState(""); 
    const [transactionAmount, setTransactionAmount] = useState(0);


    const { addTransaction } = useContext(TransactionContext);


    const handleSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: uuid(),
            description,
            amount: parseInt(transactionAmount)
        }

        console.log("new trans: ", newTransaction);

        addTransaction(newTransaction);

        setDescription("");
        setTransactionAmount(0);
    }

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <input 
                        type="text" 
                        placeholder="Detail Of Transaction"
                        value={description}
                        onChange={ e => setDescription(e.target.value) }
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="transaction">Transaction Amount</label>
                    <input 
                        type="number" 
                        placeholder="Enter Transaction Amount"
                        value={transactionAmount}
                        onChange={ e => setTransactionAmount(e.target.value) }
                    />
                </div>

                <button className="btn">Add Transaction</button>
                
            </form>
        </div>
    )
}

export default AddNewTransaction;