import { Box, Typography, Button, Paper } from "@mui/material";
import React, { useState, useEffect } from "react";
import { /* Link, */ useParams } from "react-router-dom";
import {
  AddAPhoto,
  Person,
  AlternateEmail,
  BookmarkAdded,
  Home,
  AccountBox,
} from "@mui/icons-material";
import { loadFromLocalStorage } from "../components/utils/localStorage";
import { API_BASE_URL } from "../components/utils/constants";
import { getData } from "../components/utils/getData";

export default function ProfilePage() {
  const [profile, setProfile] = useState({});
 /*  const [venueManagerProfile, setVenueManagerProfile] = useState(null);
  const [customerProfile, setCustomerProfile] = useState(null);
  const [newProfile, setNewProfile] = useState(null); */
  const [bookingsCount, setBookingsCount] = useState(0);

  let { name } = useParams();

  useEffect(() => {

     const storedProfile = loadFromLocalStorage("profile");
     setProfile(storedProfile);

   async function getProfile() {
      if (storedProfile) {
        try {
          const profileData = await getData(
            `${API_BASE_URL}holidaze/profiles/${storedProfile.name}`
          )
          console.log(profileData)
          setBookingsCount(profileData._count.bookings);
        
       /*    if (profileData.data.venueManager) {
            setVenueManagerProfile(profileData.data);
          } else if (profileData.data.Customer) {
            setCustomerProfile(profileData.data);
          } else {
            setNewProfile(profileData.data);
          } */
     } catch (error) {
          console.log(error);
        }}
    } ;
    getProfile();
  }, []);

  return (
    <Box
      sx={{
        marginTop: "8rem",
        padding: "2rem",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "center", md: "flex-start" },
        justifyContent: { md: "space-around" },
        minHeight: "90vh",
      }}
    >
      <Typography sx={{ padding: "1rem", fontSize: "1.5rem" }}>
        <AccountBox sx={{ color: "primary.main", marginRight: "1rem" }} />
        Your Profile
      </Typography>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box
          sx={{
            height: "300px",
            width: "300px",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <img
            src="images/photos/couple.jpg"
            alt="Couple"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Button sx={{ marginTop: "0.5rem" }}>
          <AddAPhoto fontSize="large" />
        </Button>
      </Box>

      <Box sx={{ width: { xs: "90%", md: "60%" } }}>
        <Paper sx={{ height: "10rem", width: "20rem" }}>
          <Typography sx={{ padding: "1rem", fontSize: "1.5rem" }}>
            <Person sx={{ marginRight: "1rem" }} /> {name} 
          </Typography>
          <Typography sx={{ padding: "1rem", fontSize: "1.5rem" }}>
            <AlternateEmail sx={{ marginRight: "1rem" }} />
        
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
            <BookmarkAdded
              sx={{ color: "primary.main", marginRight: "1rem" }}
            />
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
  {/*     )} */}
    </Box>
  );
}