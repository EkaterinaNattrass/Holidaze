import React, { useState } from "react";
import { Button, Box, Popover, Modal } from "@mui/material";
import TextField from "@mui/material/TextField";
export default function ProfilePopover() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [openModal, setOpenModal] = useState(true);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

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
          <Box sx={{ marginY: "1rem" }}>
            <Button onClick={handleOpenModal}>Customer</Button>
          </Box>
          <Box>
            <Button onClick={handleOpenModal}>Owner</Button>
          </Box>
          <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: { xs: "18rem", sm: "30rem" },
                height: { xs: "90%", sm: "70%" },
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 4,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#F2935C",
                    color: "white",
                    textTransform: "uppercase",
                    textAlign: "center",
                    height: "2.5rem",
                    width: "100%",
                    paddingTop: "0.5rem",
                    marginTop: "1rem",
                  }}
                >
                  Login
                </Box>
                <Box sx={{ marginTop: "1rem" }}>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": {
                        m: 1,
                        width: { xs: "25ch", sm: "30ch" },
                      },
                      ml: "1rem",
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="standard-basic"
                      label="Your email"
                      variant="standard"
                    />
                  </Box>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": {
                        m: 1,
                        width: { xs: "25ch", sm: "30ch" },
                      },
                      ml: "1rem",
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="standard-basic"
                      label="Your password"
                      variant="standard"
                    />
                  </Box>
                  <Button
                    sx={{
                      marginLeft: { xs: "35%", sm: "95%" },
                      marginY: '0.5rem',
                      padding: '0.5rem'
                    }}
                  >
                    login
                  </Button>
                </Box>
                <Box
                  sx={{
                    border: "1px solid #F2935C",
                    color: "#F2935C",
                    textTransform: "uppercase",
                    textAlign: "center",
                    paddingTop: "0.5rem",
                    height: "2.5rem",
                    marginTop: "1rem",
                    width: "100%",
                  }}
                >
                  Register
                </Box>
                <Box sx={{ marginTop: "1rem" }}>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": {
                        m: 1,
                        width: { xs: "25ch", sm: "30ch" },
                      },
                      ml: "1rem",
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="standard-basic"
                      label="Your name"
                      variant="standard"
                    />
                  </Box>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": {
                        m: 1,
                        width: { xs: "25ch", sm: "30ch" },
                      },
                      ml: "1rem",
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="standard-basic"
                      label="Your Noroff email"
                      variant="standard"
                    />
                  </Box>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": {
                        m: 1,
                        width: { xs: "25ch", sm: "30ch" },
                      },
                      ml: "1rem",
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="standard-basic"
                      label="Your password"
                      variant="standard"
                    />
                  </Box>
                  <Button   sx={{
                      marginLeft: { xs: "35%", sm: "95%" },
                      marginY: '0.5rem',
                      padding: '0.5rem'
                    }}>
                    register
                  </Button>
                </Box>
              </Box>
            </Box>
          </Modal>
        </Box>
      </Popover>
    </div>
  );
}
