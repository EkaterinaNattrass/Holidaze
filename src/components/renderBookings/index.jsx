import { useState, useEffect } from "react";
import { API_BASE_URL } from "../../utils/constants";
import { deleteData } from "../../utils/deleteData";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Box,
  Button,
} from "@mui/material";
import FeedbackModal from "../feedbackModal";
import { Link } from "react-router-dom";
import { convertISOToDate } from "../../utils/converts";
import { getData } from "../../utils/getData";
import { loadFromLocalStorage } from "../../utils/localStorage";

export default function RenderBookings() {
  const [openDeleteConfirmationModal, setOpenDeleteConfirmationModal] =
    useState(false);
  const [bookings, setBookings] = useState([]);
  const storedProfile = loadFromLocalStorage("profile");

  useEffect(() => {
    async function getBookings() {
      try {
        const response = await getData(
          `${API_BASE_URL}holidaze/profiles/${storedProfile.name}?_bookings=true`
        );
        const profileBookings = response.data.bookings;
        setBookings(profileBookings);
      } catch (err) {
        console.log(err);
      }
    }
    getBookings();
  }, [storedProfile.name]);

  const handleDeleteBooking = async (id) => {
    try {
      await deleteData(`${API_BASE_URL}holidaze/bookings/${id}`);
      setBookings((prevBookings) => prevBookings.filter((booking) => booking.id !== id));
      setOpenDeleteConfirmationModal(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCloseDeleteConfirmationModal = () => {
    setOpenDeleteConfirmationModal(false);
  };

  return (
   <Box sx={{width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      {bookings && bookings.length > 0 ? (
        bookings.map((data, index) => (
            <Card
              key={index}
              sx={{
                backgroundColor: "#FBFAF8",
                width: "25rem",
                margin: "2rem",
              }}
            >
              <Link to={`/venues/${data.venue.id}`}>
                <CardMedia
                  sx={{ height: 300 }}
                  image={data.venue.media?.[0]?.url}
                  alt={data.venue.media?.[0]?.alt}
                />
              </Link>
              <CardContent>
                <Box>
                  <Typography
                    sx={{
                      textTransform: "upperCase",
                      fontWeight: "400",
                      fontSize: "1rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Your booking was created: {convertISOToDate(data.created)}
                  </Typography>
                  <Typography
                    sx={{
                      textTransform: "upperCase",
                      fontWeight: "400",
                      fontSize: "1rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    You have a booked venue:
                  </Typography>
                  <Typography>
                    from {convertISOToDate(data.dateFrom)}
                  </Typography>
                  <Typography>to {convertISOToDate(data.dateTo)}</Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => handleDeleteBooking(data.id)}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
        ))
      ) : (
        <Box>
          <Typography sx={{padding: '2rem'}}>There are no bookings yet.</Typography>
        </Box>
      )}
      <FeedbackModal
        isOpen={openDeleteConfirmationModal}
        handleClose={handleCloseDeleteConfirmationModal}
        primaryText="Success"
        secondaryText="Your booking is deleted."
        handleOnClick={handleCloseDeleteConfirmationModal}
      />
    </Box>
  );
}
