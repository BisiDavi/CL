import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import AddIcon from "@mui/icons-material/Add";

import { useAppDispatch } from "@/redux/store";
import { addProductCategory } from "@/redux/vehicle-slice";
import { addPoint } from "@/redux/point-slice";

export default function LayoutDrawer() {
  const drawerWidth = 240;
  const dispatch = useAppDispatch();

  function addProductCategoryHandler() {
    dispatch(addProductCategory());
  }

  function addPointHandler() {
    dispatch(addPoint());
  }

  return (
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
        {[
          { text: "Add a Product Category", func: addProductCategoryHandler },
          { text: "Add a Point", func: addPointHandler },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={item.func}>
              <AddIcon />
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
}
