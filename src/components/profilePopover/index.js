import React, { useState } from "react";
import { Button, Box, Popover, Modal } from "@mui/material";
import TextField from "@mui/material/TextField";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";

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

  const [openModal, setOpenModal] = useState(false);

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
                width: { xs: "100%", sm: "30rem" },
                height: "60%",
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 4,
              }}
            >
              <Accordion defaultExpanded>
                <AccordionSummary
                  aria-controls="panel3-content"
                  id="panel3-header"
                  sx={{
                    backgroundColor: "#F2935C",
                    color: "white",
                    textTransform: "uppercase",
                    textAlign: "center",
                  }}
                >
                  Login
                </AccordionSummary>
                <Box>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "25ch" },
                      ml: '1rem'
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
                      "& > :not(style)": { m: 1, width: "25ch" },
                      ml: '1rem'
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
                  <Button sx={{margin: '0 0 1rem 23rem'}}>log in</Button>
                </Box>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary
                  aria-controls="panel3-content"
                  id="panel3-header"
                  sx={{
                    border: "1px solid #F2935C",
                    color: "#F2935C",
                    textTransform: "uppercase",
                    textAlign: "center",
                  }}
                >
                  Register
                </AccordionSummary>
                <Box>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "25ch" },
                      ml: '1rem'
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
                      "& > :not(style)": { m: 1, width: "25ch" },
                      ml: '1rem'
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
                      "& > :not(style)": { m: 1, width: "25ch" },
                      ml: '1rem'
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
                  <Button sx={{margin: '0 0 1rem 23rem', padding: '1rem'}}>Register</Button>
                </Box>
              </Accordion>
            </Box>
          </Modal>
        </Box>
      </Popover>
    </div>
  );
}
