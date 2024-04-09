import {
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  CssBaseline
} from "@mui/material";
import { NavLink } from "react-router-dom";

export default function LandingTextSection() {
  return (
    <>
       <CssBaseline />
      <Box
        sx={{
          height: {xs: "max-content", md: "85vh"} ,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { md: "space-around" },
          alignItems: { md: "center" },
        }}
      >
        <Card
          sx={{
            maxWidth: {xs: "100%", md: "25%"},
            height: "max-content",
            padding: { xs: "0", md: "2rem" },
          }}
        >
          <CardMedia
            sx={{ height: {xs: "10rem", md:"20rem"} }}
            image="/images/resort.png"
            title="a resort with palms"
          />
          <CardContent>
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
            >
              Browse through our diverse portfolio of holiday venues, each
              offering unique charm and character.
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            maxWidth: {xs: "100%", md: "25%"},
            height: "max-content",
            padding: { xs: "0", md: "2rem" },
          }}
        >
          <CardMedia
            sx={{ height: "20rem" }}
            image="/images/client.png"
            title="a client at a reception desk"
          />
          <CardContent>
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
            >
              Our team is committed to providing assistance and ensuring that
              your stay exceeds expectations.
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            maxWidth: {xs: "100%", md: "25%"},
            height: "max-content",
            padding: { xs: "0", md: "2rem" },
          }}
        >
          <CardMedia
            sx={{ height: "20rem" }}
            image="/images/room.png"
            title="a room in a hotel"
          />
          <CardContent>
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
            >
              From cozy cabins surrounded by picturesque landscapes to elegant
              estates, we have something for every taste.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box
        sx={{
          height: "15vh",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { md: "space-around" },
          alignItems: { md: "flex-start" },
        }}
      >
            <NavLink to="/venues"> <Button variant="contained" size="large">Browse venues</Button></NavLink>
    
      </Box>
      </>
  );
}
