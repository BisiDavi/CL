import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function ProductTitle() {
  return (
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
        label="Product Category Title"
        variant="standard"
        type="text"
        name="title"
        sx={{ width: "100%", p: 0 }}
      />
    </Box>
  );
}
