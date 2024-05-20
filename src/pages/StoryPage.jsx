import { Box, Typography } from "@mui/material";

export default function StoryPage() {
  return (
    <Box
      sx={{
        marginTop: "8rem",
        padding: "2rem",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "center", md: "flex-start" },
        justifyContent: { md: "space-around" },
        minHeight: "90vh",
      }}
    >
      <Box
        sx={{
          height: "300px",
          width: "300px",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <img
          src="images/photos/couple.jpg"
          alt="Couple"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box sx={{ width: { xs: "90%", md: "60%" } }}>
        <Typography
          sx={{ fontSize: "1.2rem", fontWeight: "100", lineHeight: "2rem" }}
        >
          Hi! We are Emily and Alex, passionate travellers. The idea for our
          holiday venue website, Holidaze, came to us during a family trip. As
          we searched for the perfect place to stay, we found ourselves
          overwhelmed by the sheer number of options available online. From
          hotels to vacation rentals, it seemed impossible to find a place that
          truly felt like home.
        </Typography>
        <Typography
          sx={{ fontSize: "1.2rem", fontWeight: "100", lineHeight: "2rem" }}
        >
          Frustrated by the limited options and exorbitant prices of traditional
          hotels, worked began exploring alternative options. We realized that
          there were countless hidden gems tucked away in differennt locations
          all arounf the world. Drawing from our own experience and a shared
          passion for innovation, we saw an opportunity to create a solution
          that would benefit both venue owners and simple travellers like us.
        </Typography>
        <Typography
          sx={{ fontSize: "1.2rem", fontWeight: "100", lineHeight: "2rem" }}
        >
          We envisioned a platform where individuals could easily discover and
          book unique spaces for their holidays while providing an additional
          source of income for venue owners. We contacted our good friend
          Ekaterina a dedicated developer, to build a user-friendly platform
          that would revolutionize the way people think about holiday venues.
        </Typography>
        <Typography
          sx={{ fontSize: "1.2rem", fontWeight: "100", lineHeight: "2rem" }}
        >
          And as the platform grew, so did Emily and Alex's vision for a future
          where finding the perfect holiday home is no longer a challenge but an
          exciting adventure.
        </Typography>
      </Box>
    </Box>
  );
}
