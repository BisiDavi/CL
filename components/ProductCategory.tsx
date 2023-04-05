import Box from "@mui/material/Box";
import { useRef } from "react";
import Draggable from "react-draggable";
import type { DraggableData, DraggableEvent } from "react-draggable";
import { useXarrow } from "react-xarrows";

import { useAppDispatch } from "@/redux/store";
import { updateCategoryItemPosition } from "@/redux/vehicle-slice";
import type { categoriesType } from "@/types/redux-type";
import ProductCategoryView from "./ProductCategoryView";
import EditableProductCategoryView from "./EditableProductCategoryView";
import ConnectPointsWrapper from "./ConnectPointsWrapper";

type ProductCategoryType = {
  category: categoriesType;
  handler: string;
  addArrow: any;
  setArrows: any;
};

export default function ProductCategory({
  category,
  handler,
  addArrow,
  setArrows,
}: ProductCategoryType) {
  const dispatch = useAppDispatch();

  const onDrag = (e: DraggableEvent, data: DraggableData) => {
    dispatch(
      updateCategoryItemPosition({
        id: category.id,
        x: data.lastX,
        y: data.lastY,
      })
    );
    setArrows((arrows: any) => [...arrows]);
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
            addArrow(refs);
            console.log("droped!", refs);
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
                {...{ boxId: category.id, handler, dragRef, boxRef }}
              />
            }
          />
        )}
      </Box>
    </Draggable>
  );
}
