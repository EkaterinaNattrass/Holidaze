import * as React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";


export default function NavigationBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="inherit">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <NavLink to={"/"}>
            <Box
              component="img"
              src="../images/icons/holidaze.png"
              alt="the logo of the company "
              sx={{ height: "5rem" }}
            />
          </NavLink>
          <Box
            component="img"
            src="../images/icons/profile.png"
            alt="the icon of the owner profile"
            sx={{ height: "4rem", cursor: "pointer" }}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
