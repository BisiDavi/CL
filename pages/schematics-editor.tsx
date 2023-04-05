import Box from "@mui/material/Box";
import { useState } from "react";

import Layout from "@/components/Layout";
import LayoutDrawer from "@/components/LayoutDrawer";
import Points from "@/components/Points";
import Arrows from "@/components/Arrows";
import ProductCategories from "@/components/ProductCategories";

export default function SchematicsEditor() {
  const [arrows, setArrows] = useState<any>([]);

  console.log("arrows", arrows);

  const addArrow = ({ start, end }: any) => {
    setArrows([...arrows, { start, end }]);
  };

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
        <ProductCategories addArrow={addArrow} setArrows={setArrows} />
        <Points addArrow={addArrow} setArrows={setArrows} />
        <Arrows arrows={arrows} />
      </Box>
    </Layout>
  );
}
