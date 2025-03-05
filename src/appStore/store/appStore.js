import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../slices/UserSlice';

const appStore = configureStore({
    reducer:{
        user : userReducer
    }
})

export default appStore;