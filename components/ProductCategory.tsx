import Box from "@mui/material/Box";
import { useState, useRef } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

import ImageView from "@/components/ImageView";
import Title from "@/components/Title";
import CategoryList from "@/components/CategoryList";
import ControlButton from "@/components/ControlButton";
import type { Position } from "@/types";

export default function ProductCategory() {
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
          position: "absolute",
          cursor: "pointer",
        }}
        ref={nodeRef}
      >
        <ControlButton
          text="❌"
          style={{
            borderRadius: "50%",
            height: "20px",
            width: "20px",
            padding: "15px",
            position: "absolute",
            top: -10,
            right: -10,
            backgroundColor: "white",
          }}
        />
        <ImageView />
        <Title />
        <CategoryList />
        <ControlButton text="save" style={{ color: "green" }} />
      </Box>
    </Draggable>
  );
}
