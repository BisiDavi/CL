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

export default function LayoutDrawer() {
  const drawerWidth = 240;
  const dispatch = useAppDispatch();

  function addProductCategoryHandler() {
    dispatch(addProductCategory());
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
        {["Add a Product Category"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={addProductCategoryHandler}>
              <AddIcon />
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
}
