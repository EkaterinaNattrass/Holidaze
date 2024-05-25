import React, { useState } from "react";
import { postData } from "../../utils/postData";
import { API_BASE_URL } from "../../utils/constants";
import { Box, Button, TextField } from "@mui/material";
import FeedbackModal from "../feedbackModal";
import { saveToLocalStorage } from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";

export default function LoginForm({
  setIsLoggedIn,
  handleCloseModal,
  setAnchorEl,
}) {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const navigate = useNavigate();
  const [openErrorModal, setOpenErrorModal] = useState(false);
  const handleCloseErrorModal = () => {
    setOpenErrorModal(false);
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    try {
      const data = {
        email: emailLogin,
        password: passwordLogin,
      };
      const profile = await postData(`${API_BASE_URL}auth/login`, data);
      setEmailLogin("");
      setPasswordLogin("");
      setIsLoggedIn(true);
      handleCloseModal();
      setAnchorEl(null);
      saveToLocalStorage("profile", profile.data);
      saveToLocalStorage("token", profile.data.accessToken);
      navigate(`/profile/${profile.data.name}`);
    } catch (error) {
      setOpenErrorModal(true);
    }
  };

  return (
    <Box sx={{ marginTop: "1rem" }}>
      <form onSubmit={handleSubmitLogin}>
        <Box
          component="div"
          sx={{
            "& > :not(style)": { m: 1, width: { xs: "25ch", sm: "30ch" } },
            ml: "1rem",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="emailLogin"
            name="emailLogin"
            label="Your Noroff email"
            variant="standard"
            value={emailLogin}
            onChange={(e) => setEmailLogin(e.target.value)}
          />
        </Box>
        <Box
          component="div"
          sx={{
            "& > :not(style)": { m: 1, width: { xs: "25ch", sm: "30ch" } },
            ml: "1rem",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="passwordLogin"
            name="passwordLogin"
            label="Your password"
            variant="standard"
            value={passwordLogin}
            onChange={(e) => setPasswordLogin(e.target.value)}
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          sx={{
            marginLeft: { xs: "35%", sm: "95%" },
            marginY: "0.5rem",
            padding: "0.5rem 1rem",
          }}
        >
          login
        </Button>
      </form>
      <FeedbackModal
        isOpen={openErrorModal}
        handleClose={handleCloseErrorModal}
        primaryText="Error"
        secondaryText="Login failed, please try again."
        handleOnClick={handleCloseErrorModal}
      />
    </Box>
  );
}
