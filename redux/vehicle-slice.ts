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
          : {
              ...state.vehicle,
              name: action.payload.name,
              image: action.payload.image,
            };
    },
    addProductCategory(state) {
      if (state.vehicle) {
        const vehicleCategories =
          state.vehicle.categories === undefined
            ? [{ title: "", image: "", vehicleSpecification: [] }]
            : [
                ...state.vehicle.categories,
                { title: "", image: "", vehicleSpecification: [] },
              ];
        state.vehicle = {
          ...state.vehicle,
          categories: vehicleCategories,
        };
      }
    },
  },
});

export const { selectVehicle, addProductCategory } = VehicleSlice.actions;
export default VehicleSlice.reducer;
