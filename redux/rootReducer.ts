import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import VehicleReducer from "@/redux/vehicle-slice";

const reducers = combineReducers({
  vehicle: VehicleReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const RootReducer = persistReducer(persistConfig, reducers);
export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
