import Box from "@mui/material/Box";
import { useRef } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

import { useAppDispatch } from "@/redux/store";
import { updateCategoryItemPosition } from "@/redux/vehicle-slice";
import type { categoriesType } from "@/types/redux-type";
import ProductCategoryView from "./ProductCategoryView";
import EditableProductCategoryView from "./EditableProductCategoryView";

type ProductCategoryType = {
  category: categoriesType;
};

export default function ProductCategory({ category }: ProductCategoryType) {
  const dispatch = useAppDispatch();

  const onDrag = (e: DraggableEvent, data: DraggableData) => {
    dispatch(
      updateCategoryItemPosition({
        id: category.id,
        x: data.lastX,
        y: data.lastY,
      })
    );
  };

  const nodeRef = useRef(null);
  return (
    <Draggable
      position={{
        x: category.x,
        y: category.y,
      }}
      nodeRef={nodeRef}
      onDrag={onDrag}
    >
      <Box ref={nodeRef} sx={{ position: "absolute" }}>
        {category.submit ? (
          <ProductCategoryView category={category} />
        ) : (
          <EditableProductCategoryView category={category} />
        )}
      </Box>
    </Draggable>
  );
}
