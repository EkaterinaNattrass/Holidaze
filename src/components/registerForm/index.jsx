import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { postData } from "../../utils/postData";
import { API_BASE_URL } from "../../utils/constants";
import FeedbackModal from "../feedbackModal";
import { saveToLocalStorage } from "../../utils/localStorage";

export default function RegisterForm({ venueManager }) {
  const [name, setName] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [openConfirmationModal, setOpenConfirmationModal] = useState("");

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
    if (value.length < 3) {
      setNameError("Name must contain at least 3 characters");
    } else {
      setNameError("");
    }
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmailRegister(value);
    const requiredDomain = "@stud.noroff.no";
    if (!value.toLowerCase().includes(requiredDomain.toLowerCase())) {
      setEmailError("Email must contain @stud.noroff.no");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPasswordRegister(value);
    if (value.length < 8) {
      setPasswordError("Password must contain at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();

    try {
      const data = {
        name: name,
        email: emailRegister,
        password: passwordRegister,
        venueManager: !venueManager,
      };
      const profile = await postData(`${API_BASE_URL}auth/register`, data);
      console.log(profile);
      setName("");
      setEmailRegister("");
      setPasswordRegister("");
      setOpenConfirmationModal(true);
      saveToLocalStorage("profile", profile.data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleCloseConfirmationModal = () => {
    setOpenConfirmationModal(false);
  };

  return (
    <Box sx={{ marginTop: "1rem" }}>
      <form onSubmit={handleSubmitRegister}>
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
            id="name"
            name="name"
            label="Your name"
            variant="standard"
            value={name}
            onChange={handleNameChange}
            error={!!nameError}
            helperText={nameError}
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
            id="emailRegister"
            name="emailRegister"
            label="Your Noroff email"
            variant="standard"
            value={emailRegister}
            onChange={handleEmailChange}
            error={!!emailError}
            helperText={emailError}
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
            id="passwordRegister"
            name="passwordRegister"
            label="Your password"
            variant="standard"
            value={passwordRegister}
            onChange={handlePasswordChange}
            error={!!passwordError}
            helperText={passwordError}
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          sx={{
            marginLeft: { xs: "30%", sm: "87%" },
            marginY: "0.5rem",
            padding: "0.5rem 1rem",
          }}
        >
          register
        </Button>
      </form>
      <FeedbackModal
        isOpen={openConfirmationModal}
        handleClose={handleCloseConfirmationModal}
        primaryText="Success"
        secondaryText="You are registered now. Please, login using your account details."
        handleOnClick={handleCloseConfirmationModal}
      />
    </Box>
  );
}
