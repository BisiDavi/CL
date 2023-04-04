import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

interface Props {
  product: { name: string; image: string };
  selectVehicleHandler: () => void;
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
      key={name}
      title={`Select ${name}`}
      component="div"
      sx={{
        margin: "0px 10px",
        border: vehicle === name ? "2px solid red" : "1px solid black",
        padding: "20px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      className="product"
      onClick={selectVehicleHandler}
    >
      <Image src={image} height={300} width={400} alt={name} />
      <Typography sx={{ textAlign: "center", fontWeight: 700, fontSize: 24 }}>
        {name}
      </Typography>
    </Box>
  );
}
