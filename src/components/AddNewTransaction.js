import React, {useState} from 'react';

const AddNewTransaction = () => {

    const [description, setDescription] = useState(""); 
    const [transactionAmount, setTransactionAmount] = useState(0)

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <input 
                        type="text" 
                        id="description"
                        placeholder="Detail Of Transaction"
                        value={description}
                        onChange={ e => setDescription(e.target.value) }
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="transaction">Transaction Amount</label>
                    <input 
                        type="number" 
                        id="transaction"
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