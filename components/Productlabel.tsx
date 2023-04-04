import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Box from "@mui/material/Box";
import { useState, useRef } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import ControlButton from "./ControlButton";

/* eslint-disable @next/next/no-img-element */

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
        <Box
          className="image-view"
          sx={{
            borderRadius: 1,
            m: "10px 0px",
            border: "1px solid black",
            p: 2,
          }}
        >
          <p>Upload Fluid Image</p>
          <img src="" alt="" />
          <input type="file" />
        </Box>
        <Box
          className="title"
          sx={{
            m: "10px 0px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <TextField
            label="Title"
            variant="standard"
            type="text"
            name="title"
            sx={{ width: "100%", p: 0 }}
          />
        </Box>
        <Box
          sx={{
            m: "10px 0px",
            display: "flex",
            alignItems: "start",
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <TextareaAutosize
            aria-label="description"
            placeholder="Add Fluid description"
            name="description"
            style={{ width: "90%", padding: "10px" }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <ControlButton text="+" />
            <ControlButton text="❌" />
          </Box>
        </Box>
      </Box>
    </Draggable>
  );
}
