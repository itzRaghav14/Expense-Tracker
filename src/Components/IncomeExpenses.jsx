import React from 'react'
import { useSelector } from 'react-redux';

const IncomeExpenses = () => {

  const transactions = useSelector(state => state.transactions);

  let incomeAmount = 0;
  let expenseAmount = 0;

  for(let transaction of transactions) {
    if(transaction.amount > 0) incomeAmount += transaction.amount;
    else expenseAmount += transaction.amount;
  }
  
  return (
    <div id='income-expense-container' className='flex h-[4.5rem] bg-white border border-black mt-4' style={{backgroundColor : 'white'}}>
			<div className='w-32 px-4 py-2 flex flex-col justify-center items-center border-r border-black'>
        <div>
          <h3 className='text-sm'> INCOME </h3>
          <p className='text-2xl font-semibold text-green'> +${incomeAmount.toFixed(2)} </p>
        </div>
			</div>

			<div className='w-32 px-4 py-2 flex flex-col justify-center items-center'>
        <div>
          <h3 className='text-sm'> EXPENSE </h3>
          <p className='text-2xl font-semibold text-red'> -${Math.abs(expenseAmount).toFixed(2)} </p>
        </div>
			</div>
    </div>
  )
}

export default IncomeExpenses
