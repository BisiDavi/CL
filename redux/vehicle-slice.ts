import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type labelType = {
  title: string;
  image: string;
  vehicleSpecification: string[];
};

type productType = {
  name: string;
  labels?: labelType[];
} | null;

type stateType = {
  vehicle: productType;
};

const initialState: stateType = {
  vehicle: null,
};

const VehicleSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    selectVehicle(state, action: PayloadAction<string>) {
      state.vehicle =
        state.vehicle === null
          ? { name: action.payload }
          : { ...state.vehicle, name: action.payload };
    },
  },
});

export const { selectVehicle } = VehicleSlice.actions;
export default VehicleSlice.reducer;
