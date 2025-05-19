import { configureStore } from "@reduxjs/toolkit";
import authReducre from "../features/auth/authSlice"

const store = configureStore({
    reducer: {
        authReducre
    }
});

export default store;