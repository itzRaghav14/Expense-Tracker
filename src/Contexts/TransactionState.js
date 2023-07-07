import React, { createContext, useReducer } from 'react'

let initalState = [
    {
        'text' : 'Gift',
        'amount' : 5
    },
    {
        'text' : 'Tax',
        'amount' : -2
    },
    {
        'text' : 'Salary',
        'amount' : 10
    }
]

export const transactionContext = createContext(initalState);

export const TransactionProvider = ({ children }) => {

    function transactionReducer(state, action) {
        switch(action.type) {
            case 'ADD_TRANSACTION':
                return {
                    ...state,
                    transactions : [action.payload.transaction, ...state.transactions]
                }
            case 'DELETE_TRANSACTION':
                return {
                    ...state,
                    transactions : state.transactions.filter(transaction => transaction.id !== action.payload.id)
                }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(transactionReducer, {transactions : initalState});

    const addTransaction = (transaction) => {
        dispatch({type : 'ADD_TRANSACTION', payload : { transaction }});
    }

    const deleteTransaction = (id) => {
        dispatch({type : 'DELETE_TRANSACTION', payload : { id }});
    }

    return (
        <transactionContext.Provider value={{
            transactions : state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </transactionContext.Provider>
    )

}
