import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import type { pointType } from "@/types/redux-type";

const initialState: pointType = {
  point: [],
};

const PointSlice = createSlice({
  name: "Point",
  initialState,
  reducers: {
    addPoint(state) {
      if (state.point.length === 0) {
        state.point = [{ id: uuidv4(), x: 300, y: 50, count: 1 }];
      } else {
        state.point = [
          ...state.point,
          {
            id: uuidv4(),
            x: state.point[state.point.length - 1].x + 100,
            y: state.point[state.point.length - 1].y + 100,
            count: state.point[state.point.length - 1].count + 1,
          },
        ];
      }
    },
    deletePoint(state, action: PayloadAction<{ id: string }>) {
      const { id } = action.payload;
      const pointId = state.point.findIndex((item) => item.id === id);
      state.point.splice(pointId, 1);
    },
    updatePointPosition(
      state,
      action: PayloadAction<{ id: string; x: number; y: number }>
    ) {
      const { id, x, y } = action.payload;
      const pointId = state.point.findIndex((item) => item.id === id);
      state.point[pointId] = { ...state.point[pointId], x, y };
    },
  },
});

export const { addPoint, deletePoint, updatePointPosition } =
  PointSlice.actions;
export default PointSlice.reducer;
