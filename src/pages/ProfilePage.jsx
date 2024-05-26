import { Button, Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { Person, AlternateEmail, AddAPhoto } from "@mui/icons-material";
import { loadFromLocalStorage } from "../utils/localStorage";
import { API_BASE_URL } from "../utils/constants";
import { getData } from "../utils/getData";
import EditAvatar from "../components/editAvatar";
import RenderVenues from "../components/renderVenues";
import RenderBookings from "../components/renderBookings";

export default function ProfilePage() {
  const [profile, setProfile] = useState({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [avatar, setAvatar] = useState({ url: "", alt: "" });

  const handleOpen = () => {
    setIsDialogOpen(true);
  };

  const handleClose = () => {
    setIsDialogOpen(false);
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
          `${API_BASE_URL}holidaze/profiles/${storedProfile.name}?_bookings=true`
        );
        setProfile(profileData.data);
        setAvatar(profileData.data.avatar);
      } catch (error) {
        console.error(error);
      }
    }
    getProfile();
  }, []);

  return (
    <Box sx={{ minHeight: "95vh" }}>
      <Box
        sx={{
          backgroundColor: "secondary.main",
          height: { xs: "15rem", md: "20rem" },
          width: "100%",
          position: "relative",
        }}
      ></Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "30%" } }}>
          <Box
            sx={{
              height: { xs: "150px", md: "300px" },
              width: { xs: "150px", md: "300px" },
              borderRadius: "50%",
              border: "2px solid white",
              overflow: "hidden",
              position: "absolute",
              left: { xs: "50%", md: "initial" },
              marginLeft: { xs: "0", md: "3rem" },
              transform: {
                xs: "translate(-50%, -50%)",
                md: "translate(10%, -50%)",
              },
              zIndex: 1,
            }}
          >
            <img
              src={avatar?.url}
              alt={avatar?.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <Button
              onClick={handleOpen}
              sx={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                marginTop: "2rem",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                borderRadius: "8px",
              }}
            >
              <AddAPhoto fontSize="large" />
            </Button>
          </Box>
          <EditAvatar
            isShown={isDialogOpen}
            handleClose={handleClose}
            handleAvatarUpdate={handleAvatarUpdate}
          />
          <Box sx={{ display: "flex", flexDirection: { xs: "column" } }}>
            <Box
              sx={{
                marginLeft: { xs: "15%", md: "8rem" },
                marginTop: "10rem",
              }}
            >
              <Typography sx={{ fontSize: "1.3rem", fontWeight: 600 }}>
                <Person sx={{ marginRight: "1rem" }} /> {profile.name || name}
              </Typography>
              <Typography sx={{ fontSize: "1.1rem" }}>
                <AlternateEmail sx={{ marginRight: "1rem" }} />
                {profile.email}
              </Typography>
              {!profile.venueManager && (
                <Box sx={{ marginTop: "4rem" }}>
                  <NavLink to="/venues">
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      sx={{
                        marginTop: { md: "1rem" },
                        marginY: { xs: "3rem" },
                      }}
                    >
                      Browse venues
                    </Button>
                  </NavLink>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: { xs: "100%", md: "70%" } }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: { md: "space-around" },
            }}
          >
            {profile.venueManager && <RenderVenues />}
            {!profile.venueManager && <RenderBookings profile={profile} />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
