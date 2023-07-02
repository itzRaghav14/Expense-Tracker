import React, { useContext } from "react";
import { AiFillCloseSquare } from 'react-icons/ai';
import { transactionContext } from "../Contexts/TransactionState";

const Transaction = ({ transaction }) => {

    let { deleteTransaction } = useContext(transactionContext);
    let sign = transaction.amount >= 0 ? '+' : '-';
    let transactionColor = sign === '+' ? 'text-green' : 'text-red';

    function handleDelete() {
        deleteTransaction(transaction.id);
    }

    return (
        <li className="w-[22.5rem] p-2 bg-white flex justify-between items-center border border-black">
            <div className="flex justify-center items-center">
                <button onClick={handleDelete} className="text-2xl text-red mr-2"><AiFillCloseSquare /></button>
                <span className="font-medium">{transaction.text}</span>
            </div>
            <div className={`font-medium ${transactionColor}`}>{sign}${Math.abs(transaction.amount)}</div>
        </li>
    );
};

export default Transaction;
