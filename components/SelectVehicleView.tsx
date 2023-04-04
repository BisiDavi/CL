import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import productsJson from "@/json/products.json";
import SelectVehicle from "@/components/SelectVehicle";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import type { selectVehicle } from "@/redux/vehicle-slice";
import type { selectVehicleHandlerType } from "@/types";

export default function SelectVehicleView() {
  const dispatch = useAppDispatch();
  const { vehicle } = useAppSelector((state) => state.vehicle);

  function selectVehicleHandler({ name, image }: selectVehicleHandlerType) {
    dispatch(selectVehicle({ name, image }));
  }

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        margin: "50px 0px",
        bgcolor: "background.default",
        p: 3,
      }}
    >
      <Typography
        sx={{ textAlign: "center", fontWeight: 700, fontSize: 30, m: 3 }}
      >
        Select a Vehicle
      </Typography>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {productsJson.products.map((product) => (
          <SelectVehicle
            key={product.name}
            product={product}
            selectVehicleHandler={selectVehicleHandler}
            vehicle={vehicle?.name}
          />
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mt: 5,
          mr: 4,
        }}
        component="div"
      >
        {vehicle?.name && (
          <Button
            variant="contained"
            sx={{
              maxWidth: 300,
              m: 4,
            }}
          >
            Proceed with {vehicle?.name} Schematics →
          </Button>
        )}
      </Box>
    </Box>
  );
}
