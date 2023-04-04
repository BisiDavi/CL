import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import type { selectVehicleHandlerType } from "@/types";

interface Props {
  product: { name: string; image: string };
  selectVehicleHandler: ({ name, image }: selectVehicleHandlerType) => void;
  vehicle: string | undefined;
}

export default function SelectVehicle({
  product,
  selectVehicleHandler,
  vehicle,
}: Props) {
  const { name, image } = product;
  return (
    <Box
      key={product.name}
      title={`Select ${product.name}`}
      component="div"
      sx={{
        margin: "0px 10px",
        border: vehicle === product.name ? "2px solid red" : "1px solid black",
        padding: "20px",
        borderRadius: "5px",
      }}
      className="product"
      onClick={() => selectVehicleHandler({ name, image })}
    >
      <Image src={product.image} height={300} width={400} alt={product.name} />
      <Typography sx={{ textAlign: "center", fontWeight: 700, fontSize: 24 }}>
        {product.name}
      </Typography>
    </Box>
  );
}
