/* eslint-disable @next/next/no-img-element */
import Box from "@mui/material/Box";

import { useAppSelector } from "@/redux/store";
import Layout from "@/components/Layout";
import Productlabel from "@/components/ProductCategory";

export default function SchematicsEditor() {
  const { vehicle } = useAppSelector((state) => state.vehicle);

  return (
    <Layout title="Schematics Editor">
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
        <Productlabel />
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
