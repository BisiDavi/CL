import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type arrowType = { arrows: Array<{ start: string; end: string }> };

const initialState: arrowType = {
  arrows: [],
};

const ArrowSlice = createSlice({
  name: "Point",
  initialState,
  reducers: {
    updateArrows(state, action: PayloadAction<{ start: string; end: string }>) {
      const { start, end } = action.payload;
      state.arrows = [...state.arrows, { start, end }];
    },
  },
});

export const { updateArrows } = ArrowSlice.actions;
export default ArrowSlice.reducer;
