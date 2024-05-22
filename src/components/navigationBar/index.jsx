import * as React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import ProfilePopover from "../profilePopover";


export default function NavigationBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="inherit">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <NavLink to={"venues"}>
            <Box
              component="img"
              src="../images/icons/holidaze.png"
              alt="the logo of the company "
              sx={{ height: "5rem" }}
            />
          </NavLink>
          <ProfilePopover />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
