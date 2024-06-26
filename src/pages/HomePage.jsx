import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Rating,
} from "@mui/material";
import {
  Search,
  Paid,
  HotelRounded,
  FmdGoodRounded,
} from "@mui/icons-material";
import { API_BASE_URL } from "../utils/constants";
import { getData } from "../utils/getData";

const API_URL = API_BASE_URL + `holidaze/venues`;

export default function HomePage() {
  const [venues, setVenues] = useState([]);
  const [isError, setIsError] = useState(false);
  const [search, setSearch] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    async function getVenues() {
      try {
        setIsError(false);
        const response = await getData(API_URL);
        const APIproducts = response.data;
        setVenues(APIproducts);
      } catch (err) {
        setIsError(true);
      }
    }
    getVenues();
  }, []);
  if (isError) {
    return <div>Error loading data</div>;
  }
  return (
    <>
      <Box sx={{ p: 2, mt: "5rem", minHeight: "90vh" }}>
        <Box
          key="venue"
          component="form"
          sx={{
            "& > :not(style)": { m: 2, width: "25ch", height: "15ch" },
          }}
          noValidate
          onSubmit={handleOnSubmit}
          autoComplete="off"
        >
          <TextField
            onChange={(e) => setSearch(e.target.value)}
            name="searchQuery"
            type="search"
            id="standard-basic"
            variant="standard"
            color="secondary"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <Search color="secondary" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Grid container spacing={4}>
          {venues
            .filter((venue) => {
              return search.toLowerCase() === ""
                ? venue
                : venue.name.toLowerCase().includes(search) ||
                    venue.description.toLowerCase().includes(search);
            })
            .map((venue) => (
              <Grid xs={12} sm={6} md={4} lg={3} key={venue.id}>
                <Card
                  key={venue.id}
                  sx={{
                    backgroundColor: "#FBFAF8",
                    maxWidth: "25rem",
                  }}
                >
                  <Link to={`/venues/${venue.id}`}>
                    <CardMedia
                      sx={{ height: 300 }}
                      image={
                        venue.media?.[0]?.url ||
                        "/images/photos/house-for-rent.jpg"
                      }
                      alt={venue.media?.[0]?.alt}
                    />
                  </Link>

                  <CardContent>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Box>
                        <Typography
                          key={venue.id}
                          sx={{
                            textTransform: "upperCase",
                            fontWeight: "400",
                            fontSize: "1rem",
                            marginBottom: "0.5rem",
                          }}
                        >
                          {venue.name}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <Rating
                          name="read-only"
                          value={venue.rating !== undefined ? venue.rating : 0}
                          readOnly
                          sx={{ color: "primary.main" }}
                        />
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <FmdGoodRounded
                        sx={{ color: "primary.main", marginRight: "0.5rem" }}
                      />
                      <Typography sx={{ fontWeight: "100" }} key={venue.id}>
                       {venue.location.city !== null
                          ? venue.location.city
                          : "City is unknown"}, {venue.location.country !== null ? venue.location.country : " country is unknown"}
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex" }}>
                      <HotelRounded
                        sx={{ color: "primary.main", marginRight: "0.5rem" }}
                      />
                      <Typography sx={{ fontWeight: "100" }} key={venue.id}>
                        max {venue.maxGuests} guests
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex" }}>
                      <Paid
                        sx={{ color: "primary.main", marginRight: "0.5rem" }}
                      />
                      <Typography sx={{ fontWeight: "400" }}>
                        {venue.price}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
}
