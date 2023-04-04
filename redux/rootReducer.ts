import { combineReducers } from "@reduxjs/toolkit";

import VehicleReducer from "@/redux/vehicle-slice";

const RootReducer = combineReducers({
  vehicle: VehicleReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
