import React from 'react'

const AddNewTransaction = () => {
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
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="transaction">Transaction Amount</label>
                    <input 
                        type="number" 
                        id="transaction"
                        placeholder="Enter Transaction Amount"
                    />
                </div>

                <button className="btn">Add Transaction</button>
                
            </form>
        </div>
    )
}

export default AddNewTransaction;