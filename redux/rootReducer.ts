import { combineReducers } from "@reduxjs/toolkit";
import ProductReducer from '@/redux/product-slice'

const RootReducer = combineReducers({
  product: ProductReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
