/* eslint-disable @next/next/no-img-element */
import Box from "@mui/material/Box";
import { useState } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { useAppSelector } from "@/redux/store";
import Layout from "@/components/Layout";

type Position = {
  xRate: number;
  yRate: number;
};

export default function SchematicsEditor() {
  const { vehicle } = useAppSelector((state) => state.vehicle);
  const [currentPosition, setCurrentPosition] = useState<Position>({
    xRate: 150,
    yRate: 150,
  });

  const onDrag = (e: DraggableEvent, data: DraggableData) => {
    setCurrentPosition({ xRate: data.lastX, yRate: data.lastY });
  };

  return (
    <Layout title="Schematics Editor">
      <Box
        sx={{
          width: "100%",
          margin: "60px auto",
          display: "flex",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        {vehicle?.image && (
          <img className="vehicle" src={vehicle?.image} alt={vehicle?.name} />
        )}
        <Draggable
          position={{
            x: currentPosition.xRate,
            y: currentPosition.yRate,
          }}
          defaultClassName=""
          onDrag={onDrag}
        >
          <Box sx={{ color: "black" }}>Hello, I&#39;m Draggable</Box>
        </Draggable>
      </Box>
      <style jsx>
        {`
          img.vehicle {
            width: 50%;
            height: 400px;
            margin: auto;
          }
        `}
      </style>
    </Layout>
  );
}
