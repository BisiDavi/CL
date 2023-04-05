/* eslint-disable @next/next/no-img-element */
import Box from "@mui/material/Box";
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";

import { useAppSelector } from "@/redux/store";
import Layout from "@/components/Layout";
import ProductCategory from "@/components/ProductCategory";
import LayoutDrawer from "@/components/LayoutDrawer";
import Point from "@/components/Point";

export default function SchematicsEditor() {
  const { vehicle } = useAppSelector((state) => state.vehicle);
  const { point } = useAppSelector((state) => state.point);

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
        {vehicle?.image && (
          <img className="vehicle" src={vehicle?.image} alt={vehicle?.name} />
        )}
        <Xwrapper>
          {vehicle &&
            vehicle.categories &&
            vehicle?.categories.map((category, index) => (
              <ProductCategory key={index} category={category} />
            ))}
          <Xarrow start={"elem1"} end="elem2" />
        </Xwrapper>
        {point.map((item) => (
          <Point key={item.id} point={item} />
        ))}
      </Box>
      <style jsx>
        {`
          img.vehicle {
            width: 50%;
            height: 400px;
            margin: auto;
          }
        `}
      </style>
    </Layout>
  );
}
