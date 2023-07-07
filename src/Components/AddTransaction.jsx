import React, { useContext, useRef } from 'react'
import { transactionContext } from '../Contexts/TransactionState'

const AddTransaction = () => {

    const { addTransaction } = useContext(transactionContext);
    const textInput = useRef(null);
    const amountInput = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        if(textInput.current.value == '' || amountInput.current.value == '') {
            return;
        }
        let newTransaction = {
            text : textInput.current.value,
            amount : + amountInput.current.value,
            id : Math.floor(Math.random() * 1000000000)
        }
        addTransaction(newTransaction);
        textInput.current.value = '';
        amountInput.current.value = '';
    }

    return (
        <div>
            <h3 className='mt-4 text-2xl font-semibold underline text-center'> Add New Transaction </h3>
            <form className='mt-4'>
                <div className='space-y-2'>
                    <div>
                        <label> Please enter the source : </label>
                        <input type="text" ref={textInput} placeholder='Gift' className='py-1 px-2 bg-inherit focus:outline-none' />
                    </div>
                    <div>
                        <label> Please enter the amount : </label>
                        <input type="number" ref={amountInput} placeholder='$0.00' className='py-1 px-2 bg-inherit focus:outline-none w-24 remove-webkit-spin_buttons' />
                    </div>
                    <div className='flex justify-center'>
                        <button type="submit" onClick={(e) => handleSubmit(e)}> SUBMIT </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddTransaction
