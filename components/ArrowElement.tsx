/* eslint-disable @next/next/no-img-element */
import Box from "@mui/material/Box";
import Draggable from "react-draggable";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";

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

export default function ArrowElement() {
  return (
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
  );
}
