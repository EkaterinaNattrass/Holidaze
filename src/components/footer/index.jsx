import * as React from "react";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        color: "#404040",
        padding: "20px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Box>
        <Typography sx={{ typography: { md: "h5", xs: "subtitle1" }, mb: 6 }}>
          About
        </Typography>
        <Box>
          <Typography
            sx={{
              typography: { md: "subtitle1", xs: "subtitle2" },
              paddingY: { xs: 1 },
            }}
          >
            Our story
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              typography: { md: "subtitle1", xs: "subtitle2" },
              paddingY: { xs: 1 },
            }}
          >
            Our team
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              typography: { md: "subtitle1", xs: "subtitle2" },
              paddingY: { xs: 1 },
            }}
          >
            Career
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography sx={{ typography: { md: "h5", xs: "subtitle1" }, mb: 6 }}>
          Company
        </Typography>
        <Box>
          <Typography
            sx={{
              typography: { md: "subtitle1", xs: "subtitle2" },
              paddingY: { xs: 1 },
            }}
          >
            Our services
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              typography: { md: "subtitle1", xs: "subtitle2" },
              paddingY: { xs: 1 },
            }}
          >
            Delivery
          </Typography>
        </Box>
        <Box>
          <NavLink to="/contact" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                typography: { md: "subtitle1", xs: "subtitle2" },
                paddingY: { xs: 1 },
              }}
              className="IconLink"
            >
              Contacts
            </Typography>
          </NavLink>
        </Box>
      </Box>
      <Box>
        <Typography sx={{ typography: { md: "h5", xs: "subtitle1" }, mb: 6 }}>
          Social Media
        </Typography>
      
      </Box>
    </Box>
  );
}
