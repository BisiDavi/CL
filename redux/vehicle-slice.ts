import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stateType } from "@/types/redux-type";

const initialState: stateType = {
  vehicle: null,
};

const VehicleSlice = createSlice({
  name: "Vehicle",
  initialState,
  reducers: {
    selectVehicle(
      state,
      action: PayloadAction<{ name: string; image: string }>
    ) {
      state.vehicle =
        state.vehicle === null
          ? { name: action.payload.name, image: action.payload.image }
          : { ...state.vehicle, name: action.payload.name };
    },
  },
});

export const { selectVehicle } = VehicleSlice.actions;
export default VehicleSlice.reducer;
