import React, { useState, useEffect } from "react";
import { Button, Box, Popover } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import AuthModalCustomer from "../authModalCustomer";
import AuthModalManager from "../authModalManager";

export default function ProfilePopover() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpenModalCustomer, setIsOpenModalCustomer] = useState(false);
  const [openModalManager, setOpenModalManager] = useState(false);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpenModalCustomer = () => setIsOpenModalCustomer(true);
  const handleOpenModalManager = () => setOpenModalManager(true);
  const handleCloseModalCustomer = () => setIsOpenModalCustomer(false);
  const handleCloseModalManager = () => setOpenModalManager(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-describedby={id} onClick={handleClick}>
        <Box
          component="img"
          src="../images/icons/profile.png"
          alt="the icon of the owner profile"
          sx={{ height: "4rem", cursor: "pointer" }}
        />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box
          sx={{
            width: "10rem",
            height: "10rem",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isLoggedIn ? (
            <>
              <Button onClick={() => navigate(`/profile/${name}`)}>
                Profile
              </Button>
              <Button sx={{ marginY: "1rem" }} onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Box sx={{ marginY: "1rem" }}>
                <Button onClick={handleOpenModalCustomer}>Customer</Button>
              </Box>
              <Box>
                <Button onClick={handleOpenModalManager}>Manager</Button>
              </Box>
              <AuthModalCustomer
                openModalCustomer={isOpenModalCustomer}
                handleCloseModal={handleCloseModalCustomer}
                setIsLoggedIn={setIsLoggedIn}
                setAnchorEl={setAnchorEl}
              />
              <AuthModalManager
                openModalManager={openModalManager}
                handleCloseModalManager={handleCloseModalManager}
                setIsLoggedIn={setIsLoggedIn}
                setAnchorEl={setAnchorEl}
              />
            </>
          )}
        </Box>
      </Popover>
    </div>
  );
}
