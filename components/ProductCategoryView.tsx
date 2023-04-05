/* eslint-disable @next/next/no-img-element */
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import ControlButton from "@/components/ControlButton";
import { useAppDispatch } from "@/redux/store";
import { toggleSubmit } from "@/redux/vehicle-slice";
import type { categoriesType } from "@/types/redux-type";

type ProductCategoryType = {
  category: categoriesType;
};
export default function ProductCategoryView({ category }: ProductCategoryType) {
  const dispatch = useAppDispatch();

  function saveButtonHandler() {
    dispatch(toggleSubmit(category.id));
  }

  return (
    <Box
      sx={{
        border: "1px solid black",
        p: 2,
        borderRadius: 2,
        m: 2,
        width: "100%",
        backgroundColor: "white",
        position: "absolute",
        cursor: "pointer",
        zIndex: 5,
      }}
    >
      <ControlButton
        text="✎"
        style={{
          color: "blue",
          borderRadius: "50%",
          height: "20px",
          width: "20px",
          padding: "15px",
          position: "absolute",
          top: -10,
          right: -10,
          backgroundColor: "white",
          zIndex: 10,
        }}
        onClick={saveButtonHandler}
      />
      {category.image && <img src={category.image} alt={category.title} />}
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        {category.title}
      </Typography>
      {category &&
        category?.categoryList &&
        category?.categoryList.length > 0 && (
          <>
            {category?.categoryList.map((_category) => (
              <Typography key={_category}>{_category}</Typography>
            ))}
          </>
        )}
    </Box>
  );
}
