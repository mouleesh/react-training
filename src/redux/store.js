import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import todoSlice from "./todoSlice";

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        todo: todoSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})

export default store;