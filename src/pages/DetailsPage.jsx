import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
//import { useCart } from "react-use-cart";
import { Typography, Button, Box, Paper } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";
import HotelRoundedIcon from "@mui/icons-material/HotelRounded";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
//import { Directions } from "@mui/icons-material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

export default function DetailsPage() {
  const [venue, setVenue] = useState({});
  const [error, setError] = useState(null);
  // const { addItem } = useCart();
  const { id } = useParams();
  const API_URL = "https://v2.api.noroff.dev/holidaze/venues/" + id;

  const [value, setValue] = React.useState(dayjs("2024-04-17"));

  useEffect(() => {
    async function getVenue() {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();
        const APIdata = result.data;
        setVenue(APIdata);
      } catch (err) {
        setError("Sorry, something went wrong");
      }
    }
    getVenue();
  }, [API_URL]);

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
          width: { xs: "100%", sm: "33rem", md: "50rem" },
          mt: { sm: 5 },
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              backgroundImage: `url(${
                venue.media && venue.media.url
                  ? venue.media.url
                  : "/images/photos/house-for-rent.jpg"
              })`,
              backgroundSize: "auto 100%",
              objectFit: "cover",
              backgroundPosition: "center",
              height: { sm: "20rem", md: "30rem" },
              display: "flex",
              width: { sm: "22rem", md: "25rem", lg: "35rem" },
              mr: "0.5rem",
            }}
          ></Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "100%", sm: "11rem", md: "25rem", lg: "35rem" },
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${
                  venue.media?.url || "/images/photos/living-room.jpg"
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: { xs: "50%", md: "15rem" },
                mb: "0.5rem",
              }}
            ></Box>
            <Box
              sx={{
                backgroundImage: `url(${
                  venue.media?.url || "/images/photos/bedroom.jpg"
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: { xs: "50%", md: "14.5rem" },
              }}
            ></Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: {xs: 'center'}
          }}
        >
          <Box sx={{ width: { xs: "60%", sm: "16rem", md: "25rem" } }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                margin: "1.5rem",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    textTransform: "upperCase",
                    fontWeight: "400",
                    fontSize: "1.2rem",
                  }}
                >
                  {venue.name}
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <StarRoundedIcon
                  sx={{ color: "primary.main", marginRight: "0.3rem" }}
                />
                <Typography sx={{ fontWeight: "100" }}>
                  {venue.rating}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", margin: "1.5rem", width: "45%" }}>
              <Typography sx={{ fontWeight: "100", fontSize: "1rem" }}>
                {venue.description}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", margin: "1.5rem 0 0 1.5rem" }}>
              <FmdGoodRoundedIcon
                sx={{ color: "primary.main", marginRight: "0.5rem" }}
              />
              <Typography sx={{ fontWeight: "100" }}>
                {venue.location && venue.location.city !== null
                  ? venue.location.city
                  : "Unknown"}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", margin: "0 0 0 1.5rem" }}>
              <HotelRoundedIcon
                sx={{ color: "primary.main", marginRight: "0.5rem" }}
              />
              <Typography sx={{ fontWeight: "100" }}>
                max {venue.maxGuests} guests
              </Typography>
            </Box>
            <Box sx={{ display: "flex", margin: "1.5rem 0 0 1.5rem" }}>
              <PaidIcon sx={{ color: "primary.main", marginRight: "0.5rem" }} />
              <Typography sx={{ fontWeight: "400" }}>{venue.price}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "45%",
                justifyContent: "space-between",
                margin: "1.5rem 0 1.5rem 1rem",
                borderTop: "grey solid 1px",
              }}
            >
              {venue.meta && venue.meta.wifi !== null ? (
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
              {venue.meta && venue.meta.parking !== null ? (
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
              {venue.meta && venue.meta.breakfast !== null ? (
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
              {venue.meta && venue.meta.pets !== null ? (
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

          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "center" },
              justifyContent: { sm: "space-around" },
            }}
          >
            <Paper
              square={false}
              elevation={3}
              sx={{
                backgroundColor: "white",
                width: { xs: "15rem", md: "30rem" },
                mt: { sm: 1 },
                height: { xs: "20rem", md: "20rem" },
                paddingX: "1rem",
                marginBottom: { xs: '2rem'} 
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={["DatePicker", "DatePicker"]}
                  sx={{ marginTop: "2.5rem"}}
                >
                  <DatePicker
                    label="Start date"
                    defaultValue={dayjs("2022-04-17")}
                  />
                  <DatePicker
                    label="End date"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                  />
                </DemoContainer>
              </LocalizationProvider>
              <Button>Book the venue</Button>
            </Paper>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
