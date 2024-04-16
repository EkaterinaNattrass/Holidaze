import { Box, Typography } from "@mui/material";

export default function ServicesPage() {
  return (
    <>
      <Box
        sx={{
          marginTop: "7rem",
          padding: "2rem",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: {xs:"center", md: 'flex-start' } ,
          justifyContent: { md: "space-around" },
        }}
      >
        <Box
          sx={{
            height: "300px",
            width: "300px",
            overflow: "hidden",
            marginBottom: { xs: "2rem", md: "none" },
          }}
        >
          <img
            src="images/icons/5.png"
            alt="an icon for a room"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <Box sx={{ width: { xs: "90%", md: "60%" } }}>
          <Typography
            sx={{ fontSize: "1.2rem", fontWeight: "100", lineHeight: "2rem" }}
          >
            <p>
              Welcome to Holidaze, your premier destination for finding the
              perfect holiday home for your next getaway.{" "}
            </p>
            <p>
              Discover Your Dream Holiday Home: Browse our collection of holiday
              homes, including beachfront villas, mountain cabins, city
              apartments, countryside cottages, and luxury estates. With photos
              and detailed descriptions for each property, you can easily find
              the perfect accommodation to suit your preferences and budget.
            </p>
            <p>
              Effortless Booking Process: Our user-friendly website and mobile
              app make it easy to search for and book your dream holiday home.
              Use our advanced search filters to narrow down your options based
              on criteria such as location, price, amenities, and availability.
              Once you've found the perfect property, our secure booking system
              allows you to reserve your stay with confidence.
            </p>
            <p>
              Exceptional Customer Support: At Holidaze, customer satisfaction
              is our top priority. Our dedicated customer support team is
              available to assist you every step of the way, from answering your
              booking inquiries to providing personalized recommendations and
              addressing any issues that arise during your stay. We're here to
              ensure that your vacation is seamless and stress-free.
            </p>
            <p>
              Rave Reviews from Satisfied Customers: Don't just take our word
              for it – hear what our satisfied customers have to say! Check out
              our testimonials and reviews to see why travelers love booking
              their holiday homes with Holidaze. With glowing feedback from past
              guests, you can book with confidence knowing that you're in good
              hands.
            </p>
            <p>
              Got Questions? We've Got Answers: Have questions about our
              services? Check out our FAQs section for answers to common
              inquiries about payment methods, cancellation policies, property
              amenities, check-in and check-out procedures, and more. We're here
              to provide you with all the information you need to plan your
              perfect vacation. Ready to find your dream holiday home? Start
              your search with Holidaze today and make your next getaway one to
              remember.
            </p>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
