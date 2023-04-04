/* eslint-disable @next/next/no-img-element */
import Box from "@mui/material/Box";

import { useAppSelector } from "@/redux/store";
import Layout from "@/components/Layout";
import ProductCategory from "@/components/ProductCategory";
import LayoutDrawer from "@/components/LayoutDrawer";

export default function SchematicsEditor() {
  const { vehicle } = useAppSelector((state) => state.vehicle);

  console.log("vehicle", vehicle);

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
        {vehicle &&
          vehicle.categories &&
          vehicle?.categories.map((category, index) => (
            <ProductCategory key={index} category={category} />
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
