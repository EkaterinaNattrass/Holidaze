import { Button, Box, Typography, Paper } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Person, AlternateEmail, Home, AddAPhoto } from "@mui/icons-material";
import { loadFromLocalStorage } from "../utils/localStorage";
import { API_BASE_URL } from "../utils/constants";
import { getData } from "../utils/getData";
import EditAvatar from "../components/editAvatar";
import NewVenueModal from "../components/newVenueModal";
import RenderVenues from "../components/renderVenues";

export default function ProfilePage() {
  const [profile, setProfile] = useState({});
  const [bookingsCount, setBookingsCount] = useState(0);
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
          `${API_BASE_URL}holidaze/profiles/${storedProfile.name}`
        );
        console.log(profileData.data);
        setBookingsCount(profileData.data._count.bookings);
        setProfile(profileData.data);
      } catch (error) {
        console.log(error);
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
          height: { xs: "200px", md: "300px" },
          width: { xs: "200px", md: "300px" },
          borderRadius: "50%",
          border: "2px solid white",
          overflow: "hidden",
          position: "absolute",
          left: { xs: "50%", md: "initial" },
          marginLeft: { xs: "0", md: "3rem" },
          transform: {
            xs: "translate(-50%, -50%)",
            md: "translate(23%, -50%)",
          },
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
            width: { xs: "90%", md: "60%" },
            marginLeft: "6rem",
            marginTop: "13rem",
          }}
        >
          <Typography sx={{ fontSize: "1.3rem", fontWeight: 600 }}>
            <Person sx={{ marginRight: "1rem" }} /> {name}
          </Typography>
          <Typography sx={{ fontSize: "1.3rem", fontWeight: 200 }}>
            <AlternateEmail sx={{ marginRight: "1rem" }} />
            {profile.email}
          </Typography>
        </Box>
        <Box>
          {profile.venueManager && (
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: { md: "space-around" },
              }}
            >
              <Box sx={{ marginY: "2rem" }}>
              </Box>
              <Paper
                sx={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  width: { xs: "100%", md: "40rem" },
                }}
              >
                <Typography
                  sx={{ padding: "1rem", fontSize: "1.3rem", fontWeight: 200 }}
                >
                  <Home sx={{ color: "primary.main", marginRight: "1rem" }} />{" "}
                  Your venues
                </Typography>
                < NewVenueModal />
                { profile._count.venues > 0 ? < RenderVenues /> : <Box><Typography>You don't have any venues</Typography></Box>  }
              </Paper>
            </Box>
          )}
          {!profile.venueManager && (
            <Paper
              sx={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                width: { xs: "20rem", md: "40rem" },
              }}
            >
              <Typography
                sx={{
                  padding: "1rem",
                  fontSize: "1.3rem",
                  fontWeight: 200,
                }}
              >
                <Home sx={{ color: "primary.main", marginRight: "1rem" }} />
                Your bookings
              </Typography>
            </Paper>
          )}
        </Box>
      </Box>
    </Box>
  );
}
