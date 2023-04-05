import Box from "@mui/material/Box";
import { useRef } from "react";
import Draggable from "react-draggable";
import type { DraggableData, DraggableEvent } from "react-draggable";

import { useAppDispatch } from "@/redux/store";
import { updateCategoryItemPosition } from "@/redux/vehicle-slice";
import ProductCategoryView from "@/components/ProductCategoryView";
import EditableProductCategoryView from "@/components/EditableProductCategoryView";
import ConnectPointsWrapper from "@/components/ConnectPointsWrapper";
import { setArrows, updateArrows } from "@/redux/arrow-slice";
import type { categoriesType } from "@/types/redux-type";

type ProductCategoryType = {
  category: categoriesType;
};

export default function ProductCategory({ category }: ProductCategoryType) {
  console.log("category.id", category.id);
  const dispatch = useAppDispatch();
  const onDrag = (e: DraggableEvent, data: DraggableData) => {
    dispatch(
      updateCategoryItemPosition({
        id: category.id,
        x: data.lastX,
        y: data.lastY,
      })
    );
    dispatch(setArrows());
  };

  const dragRef: any = useRef();
  const boxRef = useRef();

  return (
    <Draggable
      position={{
        x: category.x,
        y: category.y,
      }}
      ref={dragRef}
      onDrag={onDrag}
    >
      <Box
        id={category.id}
        ref={boxRef}
        sx={{ position: "absolute", width: "300px" }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          if (e.dataTransfer.getData("arrow") === category.id) {
            console.log(e.dataTransfer.getData("arrow"), category.id);
          } else {
            const refs = {
              start: e.dataTransfer.getData("arrow"),
              end: category.id,
            };
            dispatch(updateArrows(refs));
          }
        }}
      >
        {category.submit ? (
          <ProductCategoryView category={category} />
        ) : (
          <EditableProductCategoryView
            category={category}
            connector={
              <ConnectPointsWrapper
                {...{ boxId: category.id, handler: "bottom", dragRef, boxRef }}
              />
            }
          />
        )}
      </Box>
    </Draggable>
  );
}
