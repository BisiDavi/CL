import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import type { stateType } from "@/types/redux-type";

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
          state.vehicle?.categories === undefined ||
          state.vehicle?.categories.length === 0
            ? { x: 500, y: -200 }
            : {
                x:
                  50 +
                  state.vehicle?.categories[
                    state.vehicle?.categories.length - 1
                  ].x,
                y:
                  100 +
                  state.vehicle?.categories[
                    state.vehicle?.categories.length - 1
                  ].y,
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
    deleteProductCategory(state, action: PayloadAction<string>) {
      if (
        state?.vehicle?.categories &&
        state?.vehicle?.categories?.length > 0
      ) {
        const categoryIndex = state.vehicle.categories.findIndex(
          (category) => category.id === action.payload
        );
        state.vehicle.categories.splice(categoryIndex, 1);
      }
    },
  },
});

export const { selectVehicle, addProductCategory, deleteProductCategory } =
  VehicleSlice.actions;
export default VehicleSlice.reducer;
