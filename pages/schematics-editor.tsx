import Box from "@mui/material/Box";

import Layout from "@/components/Layout";
import LayoutDrawer from "@/components/LayoutDrawer";
import Points from "@/components/Points";
import Arrows from "@/components/Arrows";
import ProductCategories from "@/components/ProductCategories";

export default function SchematicsEditor() {
  return (
    <Layout title="Schematics Editor" drawer={<LayoutDrawer />}>
      <Box
        sx={{
          width: "100%",
          margin: "60px auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
          position: "relative",
        }}
      >
        <ProductCategories />
        <Points />
        <Arrows />
      </Box>
    </Layout>
  );
}
