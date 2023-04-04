import Box from "@mui/material/Box";

import Layout from "@/components/Layout";
import { useAppSelector } from "@/redux/store";

export default function SchematicsEditor() {
  const { vehicle } = useAppSelector((state) => state.vehicle);
  return (
    <Layout title="Schematics Editor">
      <Box>
        <Image src={vehicle.} />
        </Box>
    </Layout>
  );
}
