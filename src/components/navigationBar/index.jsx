import * as React from "react";
// import { useState } from "react";
import { styled, alpha } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Toolbar,
  InputBase,
  /* Popover,
  MenuItem */
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from "react-router-dom";

export default function NavigationBar() {
/*   const [anchorEl, setAnchorEl] = useState({});
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handlePopover = (event) => {
    setAnchorEl(event.currentTarget);
  }; */
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="inherit">
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
          <NavLink to={"/"}>
            <Box
              component="img"
              src="../images/logo.png"
              alt="the logo of the company "
              sx={{ height: "5rem" }}
            />
          </NavLink>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box
              component="img"
              src="../images/owner.png"
              alt="the logo of the company "
              sx={{ height: "4rem", cursor: 'pointer'}} 
              // onClick={handlePopover}
            />
            {/* <Popover
              id="menu-appbar"
              sx ={{ height: '30rem'}}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Popover> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
