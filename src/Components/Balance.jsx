import React from 'react'
import { useSelector } from 'react-redux'

const Balance = () => {

  const transactions = useSelector(state => state.transactions);
  let balance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  let sign = balance < 0 ? '-' : '';

  return (
    <div>
      <p className='text-sm font-medium'> YOUR BALANCE </p>
      <h1 className='text-[2rem] font-bold leading-10'> {sign}$<span className="text-accent">{Math.abs(balance).toFixed(2)} </span></h1>
    </div>
  )
}

export default Balance
