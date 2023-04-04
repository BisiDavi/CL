import Box from "@mui/material/Box";
import Image from "next/image";

import Layout from "@/components/Layout";
import { useAppSelector } from "@/redux/store";

export default function SchematicsEditor() {
  const { vehicle } = useAppSelector((state) => state.vehicle);
  return (
    <Layout title="Schematics Editor">
      <Box>
        {vehicle?.image && (
          <Image
            src={vehicle?.image}
            height={1000}
            width={1000}
            alt={vehicle?.name}
          />
        )}
      </Box>
    </Layout>
  );
}
