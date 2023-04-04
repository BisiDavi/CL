import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import productsJson from "@/json/products.json";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { selectVehicle } from "@/redux/vehicle-slice";
import SelectVehicle from "@/components/SelectVehicle";

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const dispatch = useAppDispatch();
  const { vehicle } = useAppSelector((state) => state.vehicle);

  function selectVehicleHandler(vehicle: string) {
    dispatch(selectVehicle(vehicle));
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            CL Demo
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {["Select a Vehicle"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
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
              vehicle={vehicle}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
