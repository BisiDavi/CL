/* eslint-disable @next/next/no-img-element */
import Box from "@mui/material/Box";

import Layout from "@/components/Layout";
import { useAppSelector } from "@/redux/store";

export default function SchematicsEditor() {
  const { vehicle } = useAppSelector((state) => state.vehicle);
  return (
    <Layout title="Schematics Editor">
      <Box
        sx={{
          width: "100%",
          margin: "60px auto",
          display: "flex",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        {vehicle?.image && (
          <img className="vehicle" src={vehicle?.image} alt={vehicle?.name} />
        )}
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
