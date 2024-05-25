import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Typography, Button, Box, Paper, Rating } from "@mui/material";
import { Paid, HotelRounded, FmdGoodRounded } from "@mui/icons-material";
import BookingCalendar from "../components/bookingCalendar";
import { API_BASE_URL } from "../utils/constants";
import "react-calendar/dist/Calendar.css";

export default function DetailsPage() {
  const [venue, setVenue] = useState({});
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getVenue() {
      try {
        const response = await fetch(
          `${API_BASE_URL}holidaze/venues/${id}?_bookings=true`
        );
        const result = await response.json();
        const APIdata = result.data;
        setVenue(APIdata);
      } catch (err) {
        setError("Sorry, something went wrong");
      }
    }
    getVenue();
  }, [id]);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "90vh",
        mt: "5rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {error && (
        <Link to="/venues">
          <Button color="error">
            {error} <br />
            Back to the venues
          </Button>
        </Link>
      )}
      <Paper
        elevation={3}
        square={false}
        key={id}
        sx={{
          backgroundColor: "#FBFAF8",
          width: { xs: "100%", sm: "33rem", md: "60rem" },
          mt: { sm: 5 },
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              backgroundImage: `url(${
                venue.media?.[0].url || "/images/photos/house-for-rent.jpg"
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: { xs: "16rem", sm: "20rem", md: "30rem" },
              display: "flex",
              width: { xs: "50%", sm: "22rem", md: "30rem", lg: "35rem" },
              mr: { sm: "0.5rem" },
            }}
          ></Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "50%", sm: "11rem", md: "30rem", lg: "35rem" },
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${
                  venue.media?.[1]?.url || "/images/photos/living-room.jpg"
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: { xs: "8rem", sm: "10rem", md: "15rem" },
                mb: { sm: "0.5rem" },
              }}
            ></Box>
            <Box
              sx={{
                backgroundImage: `url(${
                  venue.media?.[2]?.url || "/images/photos/bedroom.jpg"
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: { xs: "8rem", sm: "9.5rem", md: "14.5rem" },
              }}
            ></Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center" },
            padding: "0.5rem",
            maxWidth: "100%",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "27rem", lg: "30rem" },
              maxWidth: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                margin: "1rem",
                maxWidth: "100%",
                overflow: "hidden",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    textTransform: "upperCase",
                    fontWeight: "400",
                    fontSize: "1.2rem",
                    wordBreak: "break-word",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {venue.name}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "100",
                    fontSize: "1rem",
                    wordBreak: "break-word",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {venue.description}
                </Typography>
                <Box sx={{ display: "flex", marginTop: "1.5rem" }}>
                  <FmdGoodRounded
                    sx={{ color: "primary.main", marginRight: "0.5rem" }}
                  />
                  <Typography
                    sx={{
                      fontWeight: "100",
                      wordBreak: "break-word",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {venue.location && venue.location.city !== null
                      ? venue.location.city
                      : "City unknown"}
                    ,{" "}
                    {venue.location && venue.location.country !== null
                      ? venue.location.country
                      : "Country unknown"}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <HotelRounded
                    sx={{ color: "primary.main", marginRight: "0.5rem" }}
                  />
                  <Typography sx={{ fontWeight: "100" }}>
                    max {venue.maxGuests} guests
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", marginY: "1.5rem" }}>
                  <Paid sx={{ color: "primary.main", marginRight: "0.5rem" }} />
                  <Typography sx={{ fontWeight: "400" }}>
                    {venue.price}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "1.5rem 0 1.5rem 1rem",
                    borderTop: "grey solid 1px",
                  }}
                >
                  {venue.meta && venue.meta.wifi === true ? (
                    <Box
                      sx={{
                        backgroundImage: "url('/images/icons/wifi.jpg')",
                        width: "4rem",
                        height: "4rem",
                        backgroundSize: "contain",
                      }}
                    ></Box>
                  ) : (
                    <Box
                      sx={{
                        backgroundImage: "url('/images/icons/noWifi.jpg')",
                        width: "4rem",
                        height: "4rem",
                        backgroundSize: "contain",
                      }}
                    ></Box>
                  )}
                  {venue.meta && venue.meta.parking === true ? (
                    <Box
                      sx={{
                        backgroundImage: "url('/images/icons/parking.jpg')",
                        width: "4rem",
                        height: "4rem",
                        backgroundSize: "contain",
                      }}
                    ></Box>
                  ) : (
                    <Box
                      sx={{
                        backgroundImage: "url('/images/icons/noParking.jpg')",
                        width: "4rem",
                        height: "4rem",
                        backgroundSize: "contain",
                      }}
                    ></Box>
                  )}
                  {venue.meta && venue.meta.breakfast === true ? (
                    <Box
                      sx={{
                        backgroundImage: "url('/images/icons/breakfast.jpg')",
                        width: "4rem",
                        height: "4rem",
                        backgroundSize: "contain",
                      }}
                    ></Box>
                  ) : (
                    <Box
                      sx={{
                        backgroundImage: "url('/images/icons/noBreakfast.jpg')",
                        width: "4rem",
                        height: "4rem",
                        backgroundSize: "contain",
                      }}
                    ></Box>
                  )}
                  {venue.meta && venue.meta.pets === true ? (
                    <Box
                      sx={{
                        backgroundImage: "url('/images/icons/pets.jpg')",
                        width: "4rem",
                        height: "4rem",
                        backgroundSize: "contain",
                      }}
                    ></Box>
                  ) : (
                    <Box
                      sx={{
                        backgroundImage: "url('/images/icons/noPets.jpg')",
                        width: "4rem",
                        height: "4rem",
                        backgroundSize: "contain",
                      }}
                    ></Box>
                  )}
                </Box>
              </Box>
                <Rating
                  name="read-only"
                 value={venue.rating !== undefined ? venue.rating : 0}
                  readOnly
                  sx={{ color: "primary.main" }}
                />
            </Box>
          </Box>
          <Paper
            square={false}
            elevation={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              width: "25rem",
              height: "30rem",
              paddingX: "1rem",
              margin: "2rem 0.5rem",
            }}
          >
            <BookingCalendar venue={venue} id={venue.id} />
          </Paper>
        </Box>
      </Paper>
    </Box>
  );
}
