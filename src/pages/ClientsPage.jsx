import { Box, Typography } from "@mui/material";

export default function ClientsPage() {
  return (
    <>
      <Box
        sx={{
          marginTop: "7rem",
          padding: "2rem",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: { md: "space-around" },
        }}
      >
        <Box
          sx={{
            height: "200px",
            width: "200px",
            borderRadius: "50%",
            overflow: "hidden",
            marginBottom: {xs: '2rem', md: 'none'} 
          }}
        >
          <img
            src="images/photos/client1.jpg"
            alt="Couple"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box sx={{ width: { xs: "90%", md: "60%" }}}>
          <Typography
            sx={{ fontSize: "1.2rem", fontWeight: "100", lineHeight: "2rem" }}
          >
            "I'm a bit of a perfectionist when it comes to planning vacations,
            so I was thrilled when I discovered Holidaze. The website's
            collection of holiday homes is curated to perfection, ensuring that
            every property meets high standards of quality and comfort. I
            recently booked a villa in Tuscany for a romantic getaway with my
            partner, and it was an absolute dream. Thanks to Holidaze, our
            holiday was nothing short of magical." .- Emma
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          padding: "2rem",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: { md: "space-around" },
        }}
      >
        <Box
          sx={{
            height: "200px",
            width: "200px",
            borderRadius: "50%",
            overflow: "hidden",
            marginBottom: {xs: '2rem', md: 'none'} 
          }}
        >
          <img
            src="images/photos/client2.jpg"
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
            "As a frequent traveler, I've used my fair share of vacation rental
            websites, but none compare to Holidaze. The user interface is
            intuitive, and the search filters make it easy to find exactly what
            I'm looking for. I recently booked a cozy cabin in the mountains for
            a weekend retreat, and it was everything I hoped for and more.
            Holidaze has become my go-to for finding unique and affordable
            holiday homes." .- Mark
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          padding: "2rem",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: { md: "space-around" },
        }}
      >
        <Box
          sx={{
            height: "200px",
            width: "200px",
            borderRadius: "50%",
            overflow: "hidden",
            marginBottom: {xs: '2rem', md: 'none'} 
          }}
        >
          <img
            src="images/photos/client3.jpg"
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
            "I stumbled upon Holidaze while planning a last-minute getaway with
            my family. The website was a lifesaver! We found the perfect beach
            house in just a few clicks. The booking process was smooth, and the
            home exceeded our expectations. We had an amazing time, and I'll
            definitely be using Holidaze for all our future vacations." .- Henrique
          </Typography>
        </Box>
      </Box>
    </>
  );
}
