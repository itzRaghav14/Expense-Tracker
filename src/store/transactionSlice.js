import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        'text': 'Gift',
        'amount': 5,
        'id': 1
    },
    {
        'text': 'Tax',
        'amount': -2,
        'id': 2
    },
    {
        'text': 'Salary',
        'amount': 10,
        'id': 3
    }
]

const transactionSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        addTransaction(state, action) {
            return [action.payload, ...state];
        },
        deleteTransaction(state, action) {
            return state.filter(transaction => transaction.id !== action.payload);
        }
    }
})

export const { addTransaction, deleteTransaction } = transactionSlice.actions;

export default transactionSlice.reducer;