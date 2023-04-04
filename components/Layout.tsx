import Link from "next/link";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import type { PropsWithChildren } from "react";

interface Props {
  title?: string;
  drawer?: JSX.Element;
}

export default function Layout({
  children,
  title,
  drawer,
}: PropsWithChildren<Props>) {
  const drawerWidth = drawer ? 240 : 0;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link href="/">
            <Typography variant="h6" noWrap component="div">
              CL Demo
            </Typography>
          </Link>
          {title && (
            <Typography variant="h6" noWrap component="div">
              {title}
            </Typography>
          )}
        </Toolbar>
      </AppBar>
      {drawer}
      {children}
    </Box>
  );
}
