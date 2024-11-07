import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalReducer";
import themeReducer from "./themeReducer";

export const store = configureStore({
    reducer:{
        modal: modalReducer,
        theme: themeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;