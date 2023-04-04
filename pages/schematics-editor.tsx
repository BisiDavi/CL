/* eslint-disable @next/next/no-img-element */
import Box from "@mui/material/Box";
import Image from "next/image";

import Layout from "@/components/Layout";
import { useAppSelector } from "@/redux/store";

export default function SchematicsEditor() {
  const { vehicle } = useAppSelector((state) => state.vehicle);
  return (
    <Layout title="Schematics Editor">
      <Box
        sx={{
          width: "100%",
          margin: "80px auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {vehicle?.image && (
          <img className="vehicle" src={vehicle?.image} alt={vehicle?.name} />
        )}
      </Box>
      <style jsx>
        {`
          img.vehicle {
            width: 80%;
            height: 600px;
          }
        `}
      </style>
    </Layout>
  );
}
