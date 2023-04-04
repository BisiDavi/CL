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
          margin: "20px auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {vehicle?.image && (
          <Image
            src={vehicle?.image}
            height={600}
            width={600}
            alt={vehicle?.name}
          />
        )}
      </Box>
    </Layout>
  );
}
