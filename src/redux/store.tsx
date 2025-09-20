import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"
import productReducer from "./slices/productSlice"
import basketReducer from "./slices/basketSlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        product: productReducer,
        basket:basketReducer
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;