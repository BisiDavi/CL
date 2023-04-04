import Box from "@mui/material/Box";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import ControlButton from "@/components/ControlButton";

export default function ProductCategoryList() {
  return (
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
        placeholder="Product Category List"
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
      </Box>
    </Box>
  );
}
