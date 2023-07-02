import React, { createContext, useReducer } from 'react'

let initalState = [
    {
        text : 'Salary',
        amount : 20,
        id : 1
    },
    {
        text : 'Salary',
        amount : 20,
        id : 2
    },
    {
        text : 'Salary',
        amount : 20,
        id : 3
    }
]

export const transactionContext = createContext(initalState);

export const TransactionProvider = ({ children }) => {

    function transactionReducer(state, action) {
        switch(action.type) {
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

    const deleteTransaction = (id) => {
        dispatch({type : 'DELETE_TRANSACTION', payload : { id }});
    }

    return (
        <transactionContext.Provider value={{
            transactions : state.transactions,
            deleteTransaction
        }}>
            {children}
        </transactionContext.Provider>
    )

}
