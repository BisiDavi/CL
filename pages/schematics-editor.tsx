/* eslint-disable @next/next/no-img-element */
import Box from "@mui/material/Box";
import { useState } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";

import { useAppSelector } from "@/redux/store";
import Layout from "@/components/Layout";
import Productlabel from "@/components/Productlabel";

type Position = {
  xRate: number;
  yRate: number;
};

const boxStyle = {
  border: "grey solid 2px",
  borderRadius: "10px",
  padding: "5px",
};

const DraggableBox = ({ id }: any) => {
  const updateXarrow = useXarrow();
  return (
    <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
      <div id={id} style={boxStyle}>
        {id}
      </div>
    </Draggable>
  );
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
          flexDirection: "column",
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
          <Productlabel />
        </Draggable>

        <Box
          sx={{
            display: "flex",
            width: "500px",
            justifyContent: "space-between",
          }}
        >
          <Xwrapper>
            <DraggableBox id="elem1" />
            <DraggableBox id="elem2" />
            <Xarrow start={"elem1"} end="elem2" />
          </Xwrapper>
        </Box>
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
