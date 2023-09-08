import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { History } from "@mui/icons-material";

export default function ButtonAppBar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        position="sticky"
        color="transparent"
        mar
        sx={{
          borderRadius: 20,
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "black",
            }}
          >
            Email Querying App
          </Typography>

          <IconButton color="inherit">
            <History />
            <Typography
              variant="h6"
              component="div"
              display={{
                xs: "none",
                sm: "block",
              }}
              sx={{
                flexGrow: 1,
                color: "black",
              }}
            >
              Past Querries
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
