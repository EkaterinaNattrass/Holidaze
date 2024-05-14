import { Button, Box, Typography, Paper } from "@mui/material";
import React, { useState, useEffect } from "react";
import { /* Link, */ useParams } from "react-router-dom";
import {
  Person,
  AlternateEmail,
  BookmarkAdded,
  Home,
  AddAPhoto,
} from "@mui/icons-material";
import { loadFromLocalStorage } from "../components/utils/localStorage";
import { API_BASE_URL } from "../components/utils/constants";
import { getData } from "../components/utils/getData";
import { EditAvatar } from "../components/editAvatar";

export default function ProfilePage() {
  const [profile, setProfile] = useState({});
  const [bookingsCount, setBookingsCount] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const [avatar, setAvatar] = useState({url: '', alt: ''})

  const handleOpen = () => {
    setIsShown(true);
  };

  const handleClose = () => {
    setIsShown(false);
  };

  const handleAvatarUpdate = (newAvatar) => {
    setProfile((prevProfile) => ({
        ...prevProfile,
        avatar: newAvatar,
    }));
    setAvatar(newAvatar);
};

  let { name } = useParams();

  useEffect(() => {
    const storedProfile = loadFromLocalStorage("profile");
    setProfile(storedProfile);
    setAvatar(storedProfile.avatar);

    async function getProfile() {
      try {
        const profileData = await getData(
          `${API_BASE_URL}holidaze/profiles/${storedProfile.name}`
        );
        console.log(profileData.data)
        setBookingsCount(profileData.data._count.bookings);
        setProfile(profileData.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProfile();
  }, []);

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "secondary.main",
          height: "20rem",
          width: "100%",
          position: "relative",
        }}
      ></Box>
      <Box
        sx={{
          height: "300px",
          width: "300px",
          borderRadius: "50%",
          overflow: "hidden",
          position: "absollute",
          marginLeft: "3rem",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      >
        <img
           src={profile.avatar?.url}
           alt={profile.avatar?.alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Button onClick={handleOpen}
          sx={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            marginTop: "2rem",
          }}
        >
          <AddAPhoto fontSize="large" />
        </Button>
      </Box>
      <EditAvatar
        isShown={isShown}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
      <Box sx={{ width: { xs: "90%", md: "60%" } }}>
        <Paper sx={{ height: "10rem", width: "20rem" }}>
          <Typography sx={{ padding: "1rem", fontSize: "1.5rem" }}>
            <Person sx={{ marginRight: "1rem" }} /> {name}
          </Typography>
          <Typography sx={{ padding: "1rem", fontSize: "1.5rem" }}>
            <AlternateEmail sx={{ marginRight: "1rem" }} />
            {profile.email}
          </Typography>
        </Paper>
      </Box>
      {/*  {customerProfile && ( */}
      <Paper>
        <Typography
          sx={{
            padding: "1rem",
            fontSize: "1.5rem",
          }}
        >
          <BookmarkAdded sx={{ color: "primary.main", marginRight: "1rem" }} />
          Your bookings
        </Typography>
      </Paper>
      {/*       )}
      {venueManagerProfile && ( */}
      <Paper>
        <Typography sx={{ padding: "1rem", fontSize: "1.5rem" }}>
          <Home sx={{ color: "primary.main", marginRight: "1rem" }} /> Your
          venues
        </Typography>
      </Paper>
    </Box>
  );
}
