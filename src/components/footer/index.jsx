import * as React from "react";
import { NavLink, Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

export default function Footer() {
  return (
    <Box
      sx={{
        marginY: "3rem",
        padding: "1.5rem",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Box>
        <Typography
          sx={{
            textTransform: "upperCase",
            fontSize: "1.3rem",
            margin: "0 0 1rem 0.5rem",
          }}
        >
          About
        </Typography>
        <Box sx={{marginTop: '1.5rem'}}>
          <NavLink to="/story" style={{ textDecoration: "none" }}>
          <Button variant="text" sx={{color:'black'}}>
              Our story
          </Button>
          </NavLink>
        </Box>
        <Box sx={{marginTop: '1.5rem'}}>
          <NavLink to="/clients" style={{ textDecoration: "none" }}>
            <Button variant="text" sx={{color:'black'}}>
              Our clients
            </Button>
          </NavLink>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            textTransform: "upperCase",
            fontSize: "1.3rem",
            margin: "0 0 1rem 0.5rem",
          }}
        >
          Company
        </Typography>
        <Box sx={{marginTop: '1.5rem'}}>
          <NavLink to="/services" style={{ textDecoration: "none" }}>
          <Button variant="text" sx={{color:'black'}}>
              Our services
            </Button>
          </NavLink>
        </Box>
        <Box sx={{marginTop: '1.5rem'}}>
          <NavLink to="/" style={{ textDecoration: "none" }}>
          <Button variant="text" sx={{color:'black'}}>
              Landing page
            </Button>
          </NavLink>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            textTransform: "upperCase",
            fontSize: "1.3rem",
            margin: "0 0 1rem 0.5rem",
          }}
        >
          Media
        </Typography>
        <Box sx={{marginTop: '1.5rem'}}>
          <Link to="https://www.facebook.com/" style={{ textDecoration: "none" }}>
          <Button variant="text" sx={{color:'black'}}>
               <FacebookRoundedIcon />
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
