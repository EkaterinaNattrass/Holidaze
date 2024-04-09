import { Typography, Box } from "@mui/material";

export default function LandingImageSection() {
  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
      <Box
        sx={{
          backgroundImage: "url('images/house1.jpg')",
          backgroundSize: "auto 100%",
          backgroundPosition: "center",
          height: "100vh",
          width: "25%",
        }}
      >
        <Typography
          variant="h2"
          sx={{ marginTop: "15rem", textAlign: "center", color:"white" }}
        >
          ESCAPE
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundImage: "url('images/house2.jpg')",
          backgroundSize: "auto 100%",
          backgroundPosition: "center",
          height: "100vh",
          width: "25%",
        }}
      >
        <Typography
          variant="h2"
          sx={{ marginTop: "15rem", textAlign: "center", color:"white" }}
        >
          EXPERIENCE
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundImage: "url('images/house3.jpg')",
          backgroundSize: "auto 100%",
          backgroundPosition: "center",
          height: "100vh",
          width: "25%",
        }}
      >
        <Typography
          variant="h2"
          sx={{ marginTop: "15rem", textAlign: "center", color:"white" }}
        >
          ENJOY
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundImage: "url('images/house4.jpg')",
          backgroundSize: "auto 100%",
          backgroundPosition: "center",
          height: "100vh",
          width: "25%",
        }}
      >
        <Typography
          variant="h2"
          sx={{ marginTop: "15rem", textAlign: "center", color:"white" }}
        >
          EXPLORE
        </Typography>
      </Box>
    </Box>
  );
}
