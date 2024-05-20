import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../utils/constants";
import { getData } from "../../utils/getData";
import { deleteData } from "../../utils/deleteData";
import { loadFromLocalStorage } from "../../utils/localStorage";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Box,
  Link,
  Button
} from "@mui/material";

export default function RenderVenues() {
  const [venues, setVenues] = useState([]);
  // const [booking, setBooking] = useState({});
  
  const storedProfile = loadFromLocalStorage("profile");
  useEffect(() => {
    async function getVenues() {
      try {
        const response = await getData(
          `${API_BASE_URL}holidaze/profiles/${storedProfile.name}/venues`
        );
        setVenues(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getVenues();
  }, [storedProfile.name]);

  const handleDeleteVenue = async (id) => {
    try {
      await deleteData(`${API_BASE_URL}holidaze/venues/${id}`);
      setVenues((prevVenues) => prevVenues.filter((venue) => venue.id !== id)); 
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {venues.map((venue) => (
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
                image={venue.media?.[0]?.url
                }
                alt={venue.media?.[0]?.alt}
              />
            </Link>

            <CardContent>
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
            </CardContent>
            <CardActions>
        <Button size="small" onClick={() => handleDeleteVenue(venue.id)}>Delete</Button>
        <Button size="small">Update</Button>
      </CardActions>
          </Card>
      ))}
    </>
  );
}
