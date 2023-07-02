import React, { useContext } from 'react'
import Transaction from './Transaction'
import { transactionContext } from '../Contexts/TransactionState'

const TransactionList = () => {

    let { transactions } = useContext(transactionContext);
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
