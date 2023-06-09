import Box from "@mui/material/Box";
/* eslint-disable @next/next/no-img-element */

export default function ImageView() {
  return (
    <Box
      className="image-view"
      sx={{
        borderRadius: 1,
        m: "10px 0px",
        border: "1px solid black",
        p: 2,
      }}
    >
      <p>Upload Cover Image</p>
      <img src="" alt="" />
      <input type="file" />
    </Box>
  );
}
