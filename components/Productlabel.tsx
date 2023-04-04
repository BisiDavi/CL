import Box from "@mui/material/Box";
import { useState, useRef } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

import ProductLabelImageView from "@/components/ProductLabelImageView";
import ProductTitle from "@/components/ProductTitle";
import ProductCategoryList from "@/components/ProductCategoryList";

type Position = {
  xRate: number;
  yRate: number;
};
export default function Productlabel() {
  const [currentPosition, setCurrentPosition] = useState<Position>({
    xRate: 500,
    yRate: -200,
  });

  const onDrag = (e: DraggableEvent, data: DraggableData) => {
    setCurrentPosition({ xRate: data.lastX, yRate: data.lastY });
  };
  const nodeRef = useRef(null);
  return (
    <Draggable
      position={{
        x: currentPosition.xRate,
        y: currentPosition.yRate,
      }}
      nodeRef={nodeRef}
      onDrag={onDrag}
    >
      <Box
        sx={{
          border: "1px solid black",
          p: 2,
          borderRadius: 2,
          m: 2,
          maxWidth: "280px",
          backgroundColor: "white",
        }}
        ref={nodeRef}
      >
        <ProductLabelImageView />
        <ProductTitle />
        <ProductCategoryList />
      </Box>
    </Draggable>
  );
}
