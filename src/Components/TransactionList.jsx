import React from 'react'
import Transaction from './Transaction'
import { useSelector } from 'react-redux'

const TransactionList = () => {

    const transactions = useSelector(state => state.transactions);

    if(transactions.length === 0) return;
    
    return (
        <div>
            <h3 className='mt-4 text-2xl font-medium text-center underline mb-4'> History </h3>
            <ul className='border border-black'>
                {transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction} />)}
            </ul>
        </div>
    )
}

export default TransactionList
