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
  Popover,
  Backdrop,
} from "@mui/material";
import FeedbackModal from "../feedbackModal";
import { Link } from "react-router-dom";
import UpdateVenueForm from "../updateVenueForm";
import { convertISOToDate } from "../../utils/converts";
import NewVenueModal from "../newVenueModal";

export default function RenderVenues() {
  const [venues, setVenues] = useState([]);
  const [openDeleteConfirmationModal, setOpenDeleteConfirmationModal] =
    useState(false);
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [popoverState, setPopoverState] = useState({
    open: false,
    anchorEl: null,
    currentVenueId: null,
  });

  const storedProfile = loadFromLocalStorage("profile");

  useEffect(() => {
    async function getVenues() {
      try {
        const response = await getData(
          `${API_BASE_URL}holidaze/profiles/${storedProfile.name}/venues?_bookings=true&_venues=true`
        );
        setVenues(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getVenues();
  }, [storedProfile.name]);

  const handleDeleteVenue = async (id) => {
    try {
      await deleteData(`${API_BASE_URL}holidaze/venues/${id}`);
      setVenues((prevVenues) => prevVenues.filter((venue) => venue.id !== id));
      setOpenDeleteConfirmationModal(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOpenUpdateVenueModal = (event, venueId) => {
    setPopoverState({
      open: true,
      anchorEl: event.currentTarget,
      currentVenueId: venueId,
    });
    setBackdropOpen(true);
  };

  const handleCloseUpdate = () => {
    setPopoverState({
      open: false,
      anchorEl: null,
      currentVenueId: null,
    });
    setBackdropOpen(false);
  };

  const handleCloseDeleteConfirmationModal = () => {
    setOpenDeleteConfirmationModal(false);
  };

  const updateVenueList = (id, updatedVenue) => {
    setVenues((prevVenues) =>
      prevVenues.map((venue) =>
        venue.id === id ? { ...venue, ...updatedVenue } : venue
      )
    );
  };

  const addNewVenue = (newVenue) => {
    setVenues((prevVenues) => [newVenue, ...prevVenues]);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <NewVenueModal addNewVenue={addNewVenue} />
      {venues && venues.length > 0 ? (
        venues.map((venue) => (
          <Box key={venue.id}>
            <Card
              key={venue.id}
              sx={{
                backgroundColor: "#FBFAF8",
                width: { xs: "20rem", sm: "25rem" },
                margin: "2rem",
              }}
            >
              <Link to={`/venues/${venue.id}`}>
                <CardMedia
                  sx={{ height: 300 }}
                  image={venue.media?.[0]?.url}
                  alt={venue.media?.[0]?.alt}
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
                    {venue.name}
                  </Typography>
                  {venue.bookings && venue.bookings.length > 0 ? (
                    venue.bookings.map((booking) => (
                      <Box key={booking.id} sx={{ marginTop: "2rem" }}>
                        <Typography>Booking ID: </Typography>
                        <Typography>{booking.id}</Typography>
                        <Typography>From:</Typography>
                        <Typography sx={{ fontWeight: 600 }}>
                          {convertISOToDate(booking.dateFrom)}
                        </Typography>
                        <Typography>To:</Typography>
                        <Typography sx={{ fontWeight: 600 }}>
                          {convertISOToDate(booking.dateTo)}
                        </Typography>
                      </Box>
                    ))
                  ) : (
                    <Typography>No bookings available</Typography>
                  )}
                </Box>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  padding: "2rem",
                }}
              >
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => handleDeleteVenue(venue.id)}
                  sx={{ marginRight: "1rem" }}
                >
                  Delete
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  onClick={(e) => handleOpenUpdateVenueModal(e, venue.id)}
                >
                  Update
                </Button>
              </CardActions>
            </Card>
            <Popover
              id={venue.id}
              open={
                popoverState.open && popoverState.currentVenueId === venue.id
              }
              anchorEl={popoverState.anchorEl}
              onClose={handleCloseUpdate}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <UpdateVenueForm
                venue={venue}
                handleClose={handleCloseUpdate}
                updateVenueList={updateVenueList}
              />
            </Popover>
          </Box>
        ))
      ) : (
        <Box>
          <Typography sx={{ padding: "2rem" }}>
            There are no venues yet.
          </Typography>
        </Box>
      )}

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropOpen}
        onClick={handleCloseUpdate}
      />
      <FeedbackModal
        isOpen={openDeleteConfirmationModal}
        handleClose={handleCloseDeleteConfirmationModal}
        primaryText="Success"
        secondaryText="Your venue is deleted."
        handleOnClick={handleCloseDeleteConfirmationModal}
      />
    </Box>
  );
}
