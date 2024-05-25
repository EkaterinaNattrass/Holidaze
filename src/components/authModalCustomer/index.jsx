import React from "react";
import { Box, Modal } from "@mui/material";
import LoginForm from "../loginForm";
import RegisterForm from "../registerForm";

export default function AuthModalCustomer({
  openModalCustomer,
  handleCloseModalCustomer,
  setIsLoggedIn,
  setAnchorEl,
}) {
  const handleCloseModal = () => {
    handleCloseModalCustomer();
  };
  return (
    <Modal
      open={openModalCustomer}
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
          height: "75%",
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
            Login
          </Box>
          <LoginForm
            setIsLoggedIn={setIsLoggedIn}
            handleCloseModal={handleCloseModalCustomer}
            setAnchorEl={setAnchorEl}
          />
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
          <RegisterForm venueManager={true} />
        </Box>
      </Box>
    </Modal>
  );
}
