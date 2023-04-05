import Box from "@mui/material/Box";
import { useRef } from "react";
import Draggable from "react-draggable";
import type { DraggableData, DraggableEvent } from "react-draggable";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";

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
  const updateXarrow = useXarrow();

  const onDrag = (e: DraggableEvent, data: DraggableData) => {
    dispatch(
      updateCategoryItemPosition({
        id: category.id,
        x: data.lastX,
        y: data.lastY,
      })
    );
    updateXarrow();
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
      onStop={updateXarrow}
    >
      <Box ref={nodeRef} sx={{ position: "absolute", width: "300px" }}>
        {category.submit ? (
          <ProductCategoryView category={category} />
        ) : (
          <EditableProductCategoryView category={category} />
        )}
      </Box>
    </Draggable>
  );
}
