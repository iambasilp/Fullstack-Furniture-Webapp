import {configureStore} from '@reduxjs/toolkit'
import productReducer from './Slices/ProductsSlice'
export const store = configureStore({
    reducer:{
        products:productReducer,
    }
})