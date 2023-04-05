import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import VehicleReducer from "@/redux/vehicle-slice";
import PointReducer from "@/redux/point-slice";
import ArrowReducer from "@/redux/arrow-slice";

const reducers = combineReducers({
  vehicle: VehicleReducer,
  point: PointReducer,
  arrows: ArrowReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const RootReducer = persistReducer(persistConfig, reducers);
export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
