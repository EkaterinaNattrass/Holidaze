import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { NavLink } from "react-router-dom";

export default function LandingOwnerSection() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            backgroundImage: "url('images/photos/house-for-rent.jpg')",
            backgroundSize: "auto 100%",
            backgroundPosition: "center",
            height: "100vh",
            width: "100%",
          }}
        >
          <Card
            sx={{
              maxWidth: { xs: "100%", md: "25%" },
              height: "max-content",
              padding: { xs: "0", md: "2rem" },
            }}
          >
            <CardMedia
              sx={{ height: { xs: "10rem", md: "20rem" } }}
              image="/images/icons/resort.png"
              title="a resort with palms"
            />
            <CardContent>
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
              >
                Unlock the potential of your property with us! Join our platform
                today and turn your property into the next hot spot for
                travelers! Maximize your earnings, showcase your unique space,
                and embark on a journey of hospitality and success with us.
              </Typography>
            </CardContent>
            <NavLink to="/auth">
              {" "}
              <Button variant="contained" size="large">
                Register now
              </Button>
            </NavLink>
          </Card>
        </Box>
      </Box>
    </>
  );
}
