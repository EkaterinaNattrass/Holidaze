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
} from "@mui/material";
import FeedbackModal from "../feedbackModal";
import { Link } from "react-router-dom";
import UpdateVenueForm from "../updateVenueForm";

export default function RenderVenues() {
  const [venues, setVenues] = useState([]);
  const [openDeleteConfirmationModal, setOpenDeleteConfirmationModal] =
    useState(false);
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
          `${API_BASE_URL}holidaze/profiles/${storedProfile.name}/venues`
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
  };

  const handleCloseUpdate = () => {
    setPopoverState({
      open: false,
      anchorEl: null,
      currentVenueId: null,
    });
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

  return (
    <>
      {venues ? venues.map((venue) => (
        <Box>
          <Card
            key={venue.id}
            sx={{
              backgroundColor: "#FBFAF8",
              width: "25rem",
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
              </Box>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => handleDeleteVenue(venue.id)}>
                Delete
              </Button>
              <Button
                size="small"
                onClick={(e) => handleOpenUpdateVenueModal(e, venue.id)}
              >
                Update
              </Button>
            </CardActions>
          </Card>
          <Popover
            id={venue.id}
            open={popoverState.open && popoverState.currentVenueId === venue.id}
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
      )) : (<Box>
        <Typography>There are no venues yet.</Typography>
      </Box>)}

      <FeedbackModal
        isOpen={openDeleteConfirmationModal}
        handleClose={handleCloseDeleteConfirmationModal}
        primaryText="Success"
        secondaryText="Your venue is deleted."
        handleOnClick={handleCloseDeleteConfirmationModal}
      />
    </>
  );
}
