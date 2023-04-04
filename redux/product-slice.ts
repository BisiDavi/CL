import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type labelType = {
  title: string;
  image: string;
  productSpecification: string[];
};

type productType = {
  name: string;
  labels?: labelType[];
} | null;

type stateType = {
  product: productType;
};

const initialState: stateType = {
  product: null,
};

const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    selectProduct(state, action: PayloadAction<string>) {
      state.product =
        state.product === null
          ? { name: action.payload }
          : { ...state.product, name: action.payload };
    },
  },
});

export const { selectProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
