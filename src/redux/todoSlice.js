import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        data: []
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(getTodosRedux.fulfilled, (state, action) => {
            state.data = action.payload?.data
        })
    }
})

export const getTodosRedux = createAsyncThunk('todo/getTodosRedux', () => {
    return axios.get("https://jsonplaceholder.typicode.com/todos/")
    .then(response => {
        return response
    })
    .catch((err) => console.log(err))
});


export default todoSlice;