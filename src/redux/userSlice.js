import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: "",
    password: ""
  },
  reducers: {
    updateUsername: (state, data) => {
        
        state.username = data.payload
    },
    updatePassword: (state, data) => {
        state.password = data.payload
    }
  }
})

export const { updateUsername, updatePassword } = userSlice.actions;

export default userSlice;