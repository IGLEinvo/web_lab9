import { configureStore } from "@reduxjs/toolkit";
import stoneReducer from "./reduces/stoneSlice.js";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = configureStore({
    reducer: {
        stone: stoneReducer,
    },
}, composeWithDevTools());

export default store;
