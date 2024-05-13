import React, { useState } from "react";
import {
  Button,
  Box,
  Popover,
  Modal,
  TextField,
} from "@mui/material";
import { postData } from "../utils/postData";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../utils/constants";
import FeedbackModal from "../feedbackModal";
import { loadFromLocalStorage, saveToLocalStorage } from "../utils/localStorage";

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

  const navigate = useNavigate();

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
    setName("");
    setEmailLogin("");
    setEmailRegister("");
    setPasswordLogin("");
    setPasswordRegister("");
    setNameError("");
    setEmailError("");
    setPasswordError("");
  };

  const [name, setName] = useState("");
  const [emailLogin, setEmailLogin] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [openErrorModal, setOpenErrorModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      };
      await postData(`${API_BASE_URL}auth/register`, data);

      setName("");
      setEmailRegister("");
      setPasswordRegister("");
      setOpenModal(false);
      setAnchorEl(null);
      setIsLoggedIn(true);
      navigate("/profile");
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
    setAnchorEl(null);
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
      setOpenModal(false);
      setAnchorEl(null);
      setIsLoggedIn(true);
      saveToLocalStorage("profile", profile.data);
      saveToLocalStorage("token", profile.accessToken);
      navigate(`/profile/${profile.data.name}`); 
    } catch (error) { 
      setOpenErrorModal(true);
    } 
  };

  const handleCloseErrorModal = () => {
    setOpenErrorModal(false);
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
            <Button onClick={handleLogout}>Logout</Button>
          ) : (
            <>
              <Box sx={{ marginY: "1rem" }}>
                <Button onClick={handleOpenModal}>Customer</Button>
              </Box>
              <Box>
                <Button onClick={handleOpenModal}>Owner</Button>
              </Box>
            </>
          )}
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
                height: "90%",
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
                  <form onSubmit={handleSubmitLogin}>
                    <Box
                      component="div"
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
                      sx={{
                        marginLeft: { xs: "35%", sm: "95%" },
                        marginY: "0.5rem",
                        padding: "0.5rem",
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
                  <form onSubmit={handleSubmitRegister}>
                    <Box
                      component="div"
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
                      sx={{
                        marginLeft: { xs: "35%", sm: "95%" },
                        marginY: "0.5rem",
                        padding: "0.5rem",
                      }}
                    >
                      register
                    </Button>
                  </form>
                </Box>
              </Box>
            </Box>
          </Modal>
        </Box>
      </Popover>
    </div>
  );
}