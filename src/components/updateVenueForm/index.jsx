import { useState, useEffect } from "react";
import { Button, Box, FormControlLabel, Checkbox } from "@mui/material";
import { putData } from "../../utils/putData";
import { API_BASE_URL } from "../../utils/constants";
import FeedbackModal from "../feedbackModal";
import VenueInput from "../venueInput";

export default function UpdateVenueForm({
  venue,
  handleClose,
  updateVenueList,
}) {
  const [name, setName] = useState(venue.name);
  const [description, setDescription] = useState(venue.description);
  const [mediaUrl, setMediaUrl] = useState(venue.media[0]?.url || "");
  const [mediaAlt, setMediaAlt] = useState(venue.media[0]?.alt || "");
  const [price, setPrice] = useState(venue.price);
  const [rating, setRating] = useState(venue.rating);
  const [maxGuests, setMaxGuests] = useState(venue.maxGuests);
  const [city, setCity] = useState(venue.location.city || "");
  const [country, setCountry] = useState(venue.location.country || "");
  const [wifi, setWifi] = useState(venue.meta.wifi === "yes" || false);
  const [breakfast, setBreakfast] = useState(venue.meta.breakfast === "yes" || false);
  const [parking, setParking] = useState(venue.meta.parking === "yes" || false);
  const [pets, setPets] = useState(venue.meta.pets === "yes" || false);
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const [openErrorModal, setOpenErrorModal] = useState(false);

  useEffect(() => {
    if (venue) {
      setName(venue.name);
      setDescription(venue.description);
      setMediaUrl(venue.media[0]?.url || "");
      setMediaAlt(venue.media[0]?.alt || "");
      setPrice(venue.price);
      setRating(venue.rating);
      setMaxGuests(venue.maxGuests);
      setCity(venue.location.city || "");
      setCountry(venue.location.country || "");
      setWifi(venue.meta.wifi ? "yes" : "no");
      setBreakfast(venue.meta.breakfast ? "yes" : "no");
      setParking(venue.meta.parking ? "yes" : "no");
      setPets(venue.meta.pets ? "yes" : "no");
    }
  }, [venue]);

  const handleCloseConfirmationModal = () => {
    setOpenConfirmationModal(false);
  };

  const handleCloseErrorModal = () => {
    setOpenErrorModal(false);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedVenue = {
      name: name,
      description: description,
      media: [
        {
          url: mediaUrl,
          alt: mediaAlt,
        },
      ],
      price: parseFloat(price),
      maxGuests: parseFloat(maxGuests),
      rating: parseFloat(rating),
      meta: {
        wifi: wifi === "yes" ? true : false,
        parking: parking === "yes" ? true : false,
        breakfast: breakfast === "yes" ? true : false,
        pets: pets === "yes" ? true : false,
      },
      location: {
        city: city,
        country: country,
      },
    };
    try {
      await putData(`${API_BASE_URL}holidaze/venues/${venue.id}`, updatedVenue);
      updateVenueList(venue.id, updatedVenue);
      setOpenConfirmationModal(true);
      handleClose();
    } catch (error) {
      console.error("An error occurred:", error);
      setOpenErrorModal(true);
    }
  };

  return (
    <Box sx={{ padding: "4rem" }}>
      <form onSubmit={handleUpdate}>
        <VenueInput
          isRequired={true}
          input="name"
          handleInputChange={(e) => setName(e.target.value)}
          value={name}
        />
        <VenueInput
          isRequired={true}
          input="description"
          handleInputChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <VenueInput
          isRequired={true}
          input="Media URL"
          handleInputChange={(e) => setMediaUrl(e.target.value)}
          value={mediaUrl}
        />
        <VenueInput
          isRequired={true}
          input="Media Alt"
          handleInputChange={(e) => setMediaAlt(e.target.value)}
          value={mediaAlt}
        />
        <VenueInput
          isRequired={true}
          input="Price"
          handleInputChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <VenueInput
          isRequired={true}
          input="Rating"
          handleInputChange={(e) => setRating(e.target.value)}
          value={rating}
        />
        <VenueInput
          isRequired={true}
          input="Max Guests"
          handleInputChange={(e) => setMaxGuests(e.target.value)}
          value={maxGuests}
        />
        <VenueInput
          isRequired={false}
          input="City"
          handleInputChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <VenueInput
          isRequired={false}
          input="Country"
          handleInputChange={(e) => setCountry(e.target.value)}
          value={country}
        />
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={wifi === "yes"}
                onChange={(e) => setWifi(e.target.checked ? "yes" : "no")}
              />
            }
            label="Wifi"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={breakfast === "yes"}
                onChange={(e) => setBreakfast(e.target.checked ? "yes" : "no")}
              />
            }
            label="Breakfast"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={parking === "yes"}
                onChange={(e) => setParking(e.target.checked ? "yes" : "no")}
              />
            }
            label="Parking"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={pets === "yes"}
                onChange={(e) => setPets(e.target.checked ? "yes" : "no")}
              />
            }
            label="Pets"
          />
        </Box>
        <Box sx={{marginTop: '1rem', display: 'flex', justifyContent:'flex-end'}}>
          <Button variant="outlined" onClick={handleClose} >
          Cancel
        </Button>
        <Button type="submit" variant="contained" sx={{ marginLeft: "2rem" }}>
          Update
        </Button>
        </Box>
        
      </form>
      <FeedbackModal
        isOpen={openConfirmationModal}
        handleClose={handleCloseConfirmationModal}
        primaryText="Success"
        secondaryText="Your venue is updated."
        handleOnClick={handleCloseConfirmationModal}
      />
      <FeedbackModal
        isOpen={openErrorModal}
        handleClose={handleCloseErrorModal}
        primaryText="Error"
        secondaryText="Something went wrong, please try again."
        handleOnClick={handleCloseErrorModal}
      />
    </Box>
  );
}
