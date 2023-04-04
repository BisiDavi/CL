import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
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
          ? {
              name: action.payload.name,
              image: action.payload.image,
            }
          : {
              ...state.vehicle,
              name: action.payload.name,
              image: action.payload.image,
            };
    },
    addProductCategory(state) {
      if (state.vehicle) {
        const categoryDimension =
          state.vehicle.categories === undefined
            ? { x: 500, y: -200 }
            : {
                x:
                  50 +
                  state.vehicle.categories[state.vehicle.categories.length - 1]
                    .x,
                y:
                  100 +
                  state.vehicle.categories[state.vehicle.categories.length - 1]
                    .y,
              };
        const vehicleCategories =
          state.vehicle.categories === undefined
            ? [
                {
                  id: uuidv4(),
                  title: "",
                  image: "",
                  x: categoryDimension.x,
                  y: categoryDimension.y,
                  vehicleSpecification: [],
                },
              ]
            : [
                ...state.vehicle.categories,
                {
                  id: uuidv4(),
                  title: "",
                  image: "",
                  x: categoryDimension.x,
                  y: categoryDimension.y,
                  vehicleSpecification: [],
                },
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
