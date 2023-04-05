import Box from "@mui/material/Box";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import ControlButton from "@/components/ControlButton";
import { useAppDispatch } from "@/redux/store";
import { deleteCategoryList, updateCategoryList } from "@/redux/vehicle-slice";

interface Props {
  id: string;
  list?: string;
}

export default function CategoryList({ id, list }: Props) {
  const dispatch = useAppDispatch();
  const [categoryList, setCategoryList] = useState("");

  function addCategoryList() {
    if (categoryList) {
      dispatch(updateCategoryList({ id, categoryList }));
      setCategoryList("");
    }
  }

  function deleteCategoryListHandler() {
    dispatch(deleteCategoryList({ id, list }));
  }

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
      {list ? (
        <Typography sx={{ fontSize: "12px" }}>{list}</Typography>
      ) : (
        <TextareaAutosize
          aria-label="description"
          placeholder="Product Category List"
          style={{ width: "90%", padding: "10px" }}
          onChange={(e) => setCategoryList(e.target.value)}
        />
      )}

      {list ? (
        <ControlButton
          text="－"
          style={{ color: "red" }}
          onClick={deleteCategoryListHandler}
        />
      ) : (
        <ControlButton
          text="+"
          style={{ color: "green" }}
          onClick={addCategoryList}
        />
      )}
    </Box>
  );
}
