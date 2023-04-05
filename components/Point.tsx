import Box from "@mui/material/Box";
import { useRef } from "react";
import Draggable from "react-draggable";
import type { DraggableData, DraggableEvent } from "react-draggable";

import { useAppDispatch } from "@/redux/store";
import { deletePoint, updatePointPosition } from "@/redux/point-slice";
import type { pointType } from "@/types/redux-type";
import ConnectPointsWrapper from "./ConnectPointsWrapper";

interface Props {
  point: pointType["point"][0];
  addArrow: any;
  handler: string;
  setArrows: any;
}

export default function Point({ point, addArrow, handler, setArrows }: Props) {
  const dispatch = useAppDispatch();

  const onDrag = (e: DraggableEvent, data: DraggableData) => {
    dispatch(
      updatePointPosition({
        id: point.id,
        x: data.lastX,
        y: data.lastY,
      })
    );
    setArrows((arrows: any) => [...arrows]);
  };
  const dragRef: any = useRef();
  const boxRef = useRef();

  function deletePointHandler(event: any) {
    if (event.detail === 2) {
      dispatch(deletePoint({ id: point.id }));
    }
  }

  return (
    <Draggable
      position={{
        x: point.x,
        y: point.y,
      }}
      ref={dragRef}
      onDrag={onDrag}
    >
      <Box
        id={point.id}
        ref={boxRef}
        component="div"
        sx={{
          height: "30px",
          width: "30px",
          borderRadius: "50%",
          background: "white",
          border: "1px solid black",
          display: "flex",
          alignItems: "center",
          position: "absolute",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onClick={deletePointHandler}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          if (e.dataTransfer.getData("arrow") === point.id) {
            console.log(e.dataTransfer.getData("arrow"), point.id);
          } else {
            const refs = {
              start: e.dataTransfer.getData("arrow"),
              end: point.id,
            };
            addArrow(refs);
            console.log("droped!", refs);
          }
        }}
      >
        {point.count}
        <ConnectPointsWrapper
          {...{ boxId: point.id, handler, dragRef, boxRef }}
        />
      </Box>
    </Draggable>
  );
}
