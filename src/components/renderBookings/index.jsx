import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../utils/constants";
import { getData } from "../../utils/getData";
import { deleteData } from "../../utils/deleteData";
import { loadFromLocalStorage } from "../../utils/localStorage";
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

export default function RenderBookings() {
  const [bookings, setBookings] = useState([]);
  const [openDeleteConfirmationModal, setOpenDeleteConfirmationModal] =
    useState(false);

  const storedProfile = loadFromLocalStorage("profile");

  useEffect(() => {
    async function getBookings() {
      try {
        const response = await getData(
          `${API_BASE_URL}holidaze/profiles/${storedProfile.name}/bookings`
        );
        setBookings(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getBookings();
  }, [storedProfile.name]);

  const handleDeleteBooking = async (id) => {
    try {
      await deleteData(`${API_BASE_URL}holidaze/bookings/${id}`);
      setBookings((prevBookings) =>
        prevBookings.filter((booking) => booking.id !== id)
      );
      setOpenDeleteConfirmationModal(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCloseDeleteConfirmationModal = () => {
    setOpenDeleteConfirmationModal(false);
  };

  return (
    <>
      {bookings.map((booking) => (
        <Box key={booking.id}>
          <Card
            sx={{
              backgroundColor: "#FBFAF8",
              width: "25rem",
              margin: "2rem",
            }}
          >
            {/*   <Link to={`/venues/${venue.id}`}>
              <CardMedia
                sx={{ height: 300 }}
                image={venue.media?.[0]?.url}
                alt={venue.media?.[0]?.alt}
              />
            </Link> */}
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
                  Your booking was created: {booking.created}
                </Typography>
                <Typography
                  sx={{
                    textTransform: "upperCase",
                    fontWeight: "400",
                    fontSize: "1rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  The booking is from
                  {booking.dateFrom} to
                  {booking.dateTo}
                </Typography>
              </Box>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => handleDeleteBooking(booking.id)}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        </Box>
      ))}
      <FeedbackModal
        isOpen={openDeleteConfirmationModal}
        handleClose={handleCloseDeleteConfirmationModal}
        primaryText="Success"
        secondaryText="Your booking is deleted."
        handleOnClick={handleCloseDeleteConfirmationModal}
      />
    </>
  );
}
