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
import Image from "next/image";
import { useAppDispatch } from "@/redux/store";
import { selectVehicle } from "@/redux/vehicle-slice";

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const dispatch = useAppDispatch();

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
          {["Select a Product"].map((text, index) => (
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
          justifyContent: "space-around",
          margin: "100px 0px",
          bgcolor: "background.default",
          p: 3,
        }}
      >
        {productsJson.products.map((product) => (
          <Box
            key={product.name}
            title={`Select ${product.name}`}
            component="div"
            sx={{
              margin: "0px 10px",
              border: "1px solid black",
              padding: "20px",
              borderRadius: "5px",
            }}
            className="product"
            onClick={() => selectVehicleHandler(product.name)}
          >
            <Image
              src={product.image}
              height={300}
              width={400}
              alt={product.name}
            />
            <Typography
              sx={{ textAlign: "center", fontWeight: 700, fontSize: 24 }}
            >
              {product.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
