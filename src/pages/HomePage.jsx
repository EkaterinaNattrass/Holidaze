import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Card, CardActions, CardContent, Typography, Button, Box, TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

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
    <Box sx={{p:2, mt: '5rem'}}>
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
                : venue.name.toLowerCase().includes(search);
            })
            .map((venue) => (
              <Grid key={venue.id} xs={12} md={4}>
                <Card sx={{ backgroundColor: "#FBFAF8", maxWidth: 600 }}>
                  {/* <CardMedia>{item.image.url}</CardMedia> */}
                  <CardContent>
                    <Typography>{venue.name}</Typography>
                    {/* <Typography>{item.location}</Typography> */}
                    <Typography>{venue.price}</Typography>
                    <Typography>{venue.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={`/venues/${venue.id}`}>
                      <Button variant='contained'>View venue</Button>
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