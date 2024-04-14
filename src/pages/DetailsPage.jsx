import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  CssBaseline,
  Box,
  CardMedia,
} from "@mui/material";

export default function DetailsPage() {
  const [venue, setVenue] = useState({});
  const [error, setError] = useState(null);
  const { addItem } = useCart();
  const { id } = useParams();
  const API_URL = "https://v2.api.noroff.dev/holidaze/venues/" + id;

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
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ minheight: "90vh" }}>
          {error && (
            <Link to="/venues">
              <Button color="error">
                {error} <br />
                Back to the venues
              </Button>
            </Link>
          )}
          <Card
            key={id}
            sx={{
              backgroundColor: "#FBFAF8",
              maxWidth: 800,
              padding: { md: 2 },
              m: 5,
            }}
          >
            <CardMedia val={venue.image?.url} />
            <Typography>{venue.title}</Typography>
            <CardContent>{venue.description}</CardContent>
            <Typography>{venue.price}</Typography>
            <CardActions
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: { xs: "center" },
              }}
            >
              <Link to={"/venues"}>
                <Button variant='outlined'>Back to the venues</Button>
              </Link>
              <Button
                onClick={() => addItem({ ...venue })}
                variant="contained"
                color="primary"
              >
                Add
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Container>
    </>
  );
}
