import { Button } from "@mui/material";
import Box from "@mui/material/Box";
/* eslint-disable @next/next/no-img-element */

export default function Productlabel() {
  return (
    <Box>
      <Box className="image-view">
        <p>Upload Fluid Image</p>
        <img src="" alt="" />
        <input type="file" />
      </Box>
      <Box className="title">
        <input type="text" name="title" placeholder="Title" />
        <Box>
          <Button>❌</Button>
          <Button>✅</Button>
        </Box>
      </Box>
      <Box>
        <Box>
          <input
            type="text"
            name="description"
            placeholder="Add Fluid description"
          />
        </Box>
        <Button>+</Button>
        <Button>❌</Button>
        <Button>✅</Button>
      </Box>
    </Box>
  );
}
