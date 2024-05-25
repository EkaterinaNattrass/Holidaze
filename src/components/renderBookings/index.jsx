import { useState } from "react";
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

export default function RenderBookings({ profile }) {
  const [openDeleteConfirmationModal, setOpenDeleteConfirmationModal] =
    useState(false);
  const [bookings, setBookings] = useState(false);
  const handleDeleteBooking = async (id) => {
    try {
      await deleteData(`${API_BASE_URL}holidaze/bookings/${id}`);
      setBookings((bookings) =>
        bookings.filter((booking) => booking.id !== id)
      );
      setOpenDeleteConfirmationModal(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCloseDeleteConfirmationModal = () => {
    setOpenDeleteConfirmationModal(false);
  };
  const profileBookings =
    profile &&
    profile.bookings &&
    profile.bookings.sort((a, b) => new Date(b.created) - new Date(a.created));
  return (
   <Box sx={{width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      {profileBookings && profileBookings.length > 0 ? (
        profileBookings.map((data, index) => (
         
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
          <Typography>There are no bookings yet.</Typography>
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
