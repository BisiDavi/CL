import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import { useAppDispatch } from "@/redux/store";
import { updateCategoryTitle } from "@/redux/vehicle-slice";

interface Props {
  id: string;
  title: string;
}

export default function Title({ id, title }: Props) {
  const dispatch = useAppDispatch();

  function onChangeHandler(e: any) {
    dispatch(updateCategoryTitle({ id, title: e.target.value }));
  }
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
        value={title}
        sx={{ width: "100%", p: 0 }}
        onChange={onChangeHandler}
      />
    </Box>
  );
}
