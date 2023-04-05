import Box from "@mui/material/Box";

import ImageView from "@/components/ImageView";
import Title from "@/components/Title";
import CategoryList from "@/components/CategoryList";
import ControlButton from "@/components/ControlButton";
import { useAppDispatch } from "@/redux/store";
import { deleteProductCategory, toggleSubmit } from "@/redux/vehicle-slice";
import type { categoriesType } from "@/types/redux-type";

type ProductCategoryType = {
  category: categoriesType;
};
export default function EditableProductCategoryView({
  category,
}: ProductCategoryType) {
  const dispatch = useAppDispatch();

  function deleteProductCategoryHandler() {
    dispatch(deleteProductCategory(category.id));
  }

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
        maxWidth: "300px",
        backgroundColor: "white",
        position: "absolute",
        cursor: "pointer",
        zIndex: 5,
      }}
    >
      <ControlButton
        text="❌"
        style={{
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
        onClick={deleteProductCategoryHandler}
      />
      <ImageView />
      <Title id={category.id} title={category.title} />
      {category &&
      category?.categoryList &&
      category?.categoryList.length > 0 ? (
        <>
          {category?.categoryList.map((_category) => (
            <CategoryList key={_category} id={category.id} list={_category} />
          ))}
          <CategoryList id={category.id} />
        </>
      ) : (
        <CategoryList id={category.id} />
      )}
      <ControlButton
        text="save"
        style={{ color: "green" }}
        onClick={saveButtonHandler}
      />
    </Box>
  );
}
