import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PaidIcon from "@mui/icons-material/Paid";
import HotelRoundedIcon from "@mui/icons-material/HotelRounded";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const API_URL = "https://v2.api.noroff.dev/holidaze/venues";

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
        const response = await fetch(API_URL);
        const result = await response.json();
        const APIproducts = result.data;
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
                    <SearchIcon color="secondary" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Grid container spacing={6}>
          {venues
            .filter((venue) => {
              return search.toLowerCase() === ""
                ? venue
                : venue.name.toLowerCase().includes(search) ||
                    venue.description.toLowerCase().includes(search);
            })
            .map((venue) => (
              <Grid key={venue.id} xs={12} md={4}>
                <Card
                  sx={{
                    backgroundColor: "#FBFAF8",
                    maxWidth: "25rem" /* minHeight: '20rem' */,
                  }}
                >
                  <CardMedia>{venue.image?.url}</CardMedia>
                  <CardContent>
                    <Box sx={{ display: "flex", justifyContent: 'space-between' }}>
                      <Box>
                         <Typography
                        sx={{ textTransform: 'upperCase',fontWeight: "400", fontSize: '1.2rem', marginBottom: "1rem" }}
                      >
                        {venue.name}
                      </Typography>
                      </Box>
                      <Box sx={{ display: "flex" }}>
                      <StarRoundedIcon   sx={{ color: "primary.main", marginRight: "0.3rem" }}/>
                       <Typography sx={{fontWeight: "100"}}>{venue.rating}</Typography> 
                      </Box>
                      
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <FmdGoodRoundedIcon
                        sx={{ color: "primary.main", marginRight: "0.5rem" }}
                      />
                      <Typography sx={{fontWeight: "100"}}>{venue.location.city}</Typography>
                    </Box>

                    <Box sx={{ display: "flex" }}>
                      <HotelRoundedIcon
                        sx={{ color: "primary.main", marginRight: "0.5rem" }}
                      />
                      <Typography sx={{fontWeight: "100"}}>max {venue.maxGuests} guests</Typography>
                    </Box>

                    <Box sx={{ display: "flex" }}>
                      <PaidIcon
                        sx={{ color: "primary.main", marginRight: "0.5rem" }}
                      />
                      <Typography sx={{ fontWeight: "400" }}>
                        {venue.price}
                      </Typography>
                    </Box>
                  </CardContent>
                  <CardActions
                    sx={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <Link to={`/venues/${venue.id}`}>
                      <Button variant="text" sx={{color:'black'}}>
                        View venue <ArrowForwardIosRoundedIcon fontSize="0.6rem"/>
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
}
