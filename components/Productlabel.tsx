import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Box from "@mui/material/Box";
import { useState, useRef } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

/* eslint-disable @next/next/no-img-element */

type Position = {
  xRate: number;
  yRate: number;
};
export default function Productlabel() {
  const [currentPosition, setCurrentPosition] = useState<Position>({
    xRate: 150,
    yRate: 150,
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
          maxWidth: "250px",
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
        <Box className="title" sx={{ m: "10px 0px", display: "flex" }}>
          <TextField
            label="Title"
            variant="outlined"
            type="text"
            name="title"
            sx={{ height: 10, width: "90%" }}
          />
          <Box sx={{ width: "10%", border: "1px solid black" }}>
            <Button>❌</Button>
            <Button>✅</Button>
          </Box>
        </Box>
        <Box sx={{ m: "10px 0px", display: "flex" }}>
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
              width: "10%",
              border: "1px solid black",
            }}
          >
            <Button>+</Button>
            <Button>❌</Button>
            <Button>✅</Button>
          </Box>
        </Box>
      </Box>
    </Draggable>
  );
}
