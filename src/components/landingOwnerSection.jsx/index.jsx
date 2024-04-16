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
          backgroundImage: "url('images/photos/house-for-rent.jpg')",
          backgroundSize: "auto 100%",
          backgroundPosition: "center",
          objectFit: 'cover',
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: 'center', md: 'flex-start'}
        }}
      >
        <Card sx={{ maxWidth: 345, marginLeft: {xs: '0', mathDepth:'4rem'}  }}>
          <CardMedia
            sx={{ height: 320 }}
            image="/images/icons/owner.png"
            title="reception desk at a hotel"
          />
          <CardContent>
            <Typography
              variant="body2"
              sx={{ fontSize: "1.5rem", fontWeight:'100' }}
            >
              Unlock the potential of your property with us! Join our platform
              today and turn your property into the next hot spot for travelers!
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom :'1.5rem'
            }}
          >
            <NavLink to="/auth">
              <Button variant="contained" color="primary" size="large">
                Register now
              </Button>
            </NavLink>
          </Box>
        </Card>
      </Box>
    </>
  );
}
