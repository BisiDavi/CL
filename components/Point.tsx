import Box from "@mui/material/Box";
import { useRef } from "react";
import Draggable from "react-draggable";
import type { DraggableData, DraggableEvent } from "react-draggable";

import { useAppDispatch } from "@/redux/store";
import { updatePointPosition } from "@/redux/point-slice";
import type { pointType } from "@/types/redux-type";

interface Props {
  point: pointType["point"][0];
}

export default function Point({ point }: Props) {
  const dispatch = useAppDispatch();

  const onDrag = (e: DraggableEvent, data: DraggableData) => {
    dispatch(
      updatePointPosition({
        id: point.id,
        x: data.lastX,
        y: data.lastY,
      })
    );
  };
  const nodeRef = useRef(null);

  return (
    <Draggable
      position={{
        x: point.x,
        y: point.y,
      }}
      nodeRef={nodeRef}
      onDrag={onDrag}
    >
      <Box
        ref={nodeRef}
        component="div"
        key={point.id}
        sx={{
          height: "40px",
          width: "40px",
          borderRadius: "50%",
          background: "white",
          border: "1px solid black",
          display: "flex",
          alignItems: "center",
          position: "absolute",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        {point.count}
      </Box>
    </Draggable>
  );
}
