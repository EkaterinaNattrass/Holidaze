import {
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  CssBaseline,
} from "@mui/material";
import { NavLink } from "react-router-dom";

export default function LandingTextSection() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          height: { md: "80vh" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { md: "space-around" },
          alignItems: "center",
          backgroundColor: "#EEEDEB",
        }}
      >
        <Card sx={{ maxWidth: 345, marginTop: { xs: "1rem" } }}>
          <CardMedia
            sx={{ height: 300, marginTop: '1rem' }}
            image="/images/icons/resort.png"
            title="a resort with palms"
          />
          <CardContent>
            <Typography variant="body2" sx={{ fontSize: "1.5rem", fontWeight:'100' }}>
              Browse through our diverse portfolio of holiday venues, each
              offering unique charm and character.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 345, marginTop: { xs: "1rem" } }}>
          <CardMedia
            sx={{ height: 300, marginTop: '1rem'  }}
            image="/images/icons/client.png"
            title="a client at a reception desk"
          />
          <CardContent>
            <Typography variant="body2" sx={{ fontSize: "1.5rem", fontWeight:'100' }}>
              Our team is committed to providing assistance and ensuring that
              your stay exceeds expectations.
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            maxWidth: 345,
            marginTop: { xs: "1rem" },
          }}
        >
          <CardMedia
            sx={{ height: 300, marginTop: '1rem'  }}
            image="/images/icons/room.png"
            title="a room in a hotel"
          />
          <CardContent>
            <Typography  sx={{ fontSize: "1.5rem", fontWeight:'100' }}>
              From cozy picturesque cabins to elegant estates, we have something
              for every taste.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box
        sx={{
          height: { md: "10vh" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#EEEDEB"
        }}
      >
        <NavLink to="/venues">
          <Button variant="contained" color="primary" size="large"  sx= {{marginTop: {md: '1rem'}, marginY: {xs: "3rem"}}}>
            Browse venues
          </Button>
        </NavLink>
      </Box>
    </>
  );
}
