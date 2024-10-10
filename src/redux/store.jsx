import { configureStore } from "@reduxjs/toolkit";
import { cartreducer } from "./slice";

export const store = configureStore({
    reducer:cartreducer
})