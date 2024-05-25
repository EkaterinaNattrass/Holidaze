import { useState } from "react";
import { Button, Box, FormControlLabel, Checkbox } from "@mui/material";
import { postData } from "../../utils/postData";
import { API_BASE_URL } from "../../utils/constants";
import VenueInput from "../venueInput";
import FeedbackModal from "../feedbackModal";

export default function CreateNewVenue({ handleCloseVenue }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [mediaUrl, setMediaUrl] = useState("");
  const [mediaAlt, setMediaAlt] = useState("");
  const [price, setPrice] = useState("");
  const [maxGuests, setMaxGuests] = useState("");
  const [rating, setRating] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [wifi, setWifi] = useState("no");
  const [breakfast, setBreakfast] = useState("no");
  const [parking, setParking] = useState("no");
  const [pets, setPets] = useState("no");
  const [nameError, setNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [maxGuestsError, setMaxGuestsError] = useState("");
  const [ratingError, setRatingError] = useState("");
  const [openErrorModal, setOpenErrorModal] = useState(false);
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    if (value.length < 3) {
      setNameError("Name must contain at least 3 characters");
    } else {
      setNameError("");
    }
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setDescription(value);
    if (value.trim() === "") {
      setDescriptionError("Description is required");
    } else {
      setDescriptionError("");
    }
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setPrice(value);
    if (!value) {
      setPriceError("Price is required");
    } else if (isNaN(parseFloat(value))) {
      setPriceError("Price must be a number");
    } else if (parseFloat(value) <= 0) {
      setPriceError("Price must be greater than 0");
    } else if (parseFloat(value) > 10000) {
      setPriceError("Price must be less than 10000");
    } else {
      setPriceError("");
    }
  };

  const handleMaxGuestsChange = (e) => {
    const value = e.target.value;
    setMaxGuests(value);
    const parsedMaxGuests = parseInt(value, 10);
    if (isNaN(parsedMaxGuests) || parsedMaxGuests < 1 || parsedMaxGuests > 50) {
      setMaxGuestsError("Number of guests must be between 1 and 50");
    } else {
      setMaxGuestsError("");
    }
  };

  const handleRatingChange = (e) => {
    const value = e.target.value;
    setRating(value);
    const parsedRating = parseInt(value, 10);
    if (isNaN(parsedRating) || parsedRating < 1 || parsedRating > 5) {
      setRatingError("Rating must be from 1 to 5");
    } else {
      setRatingError("");
    }
  };

  const handleCloseConfirmationModal = () => {
    setOpenConfirmationModal(false);
  };

  const handleCloseErrorModal = () => {
    setOpenErrorModal(false);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
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

      const venue = await postData(`${API_BASE_URL}holidaze/venues`, data);
      setName("");
      setDescription("");
      setMediaUrl("");
      setMediaAlt("");
      setPrice("");
      setCity("");
      setCountry("");
      setMaxGuests("");
      setRating("");
      setWifi("no");
      setBreakfast("no");
      setParking("no");
      setPets("no");
      console.log(venue);
      setOpenConfirmationModal(true);
      handleCloseVenue();
      window.location.reload();
    } catch (error) {
      setOpenErrorModal(true);
    }
  };

  return (
    <Box sx={{ padding: "4rem" }}>
      <form onSubmit={onFormSubmit}>
        <VenueInput
          isRequired={true}
          input={"name"}
          handleInputChange={handleNameChange}
          inputError={nameError}
          inputProps={{
            maxLength: 25,
          }}
        />
        <VenueInput
          isRequired={true}
          input={"description"}
          handleInputChange={handleDescriptionChange}
          inputError={descriptionError}
          inputProps={{
            maxLength: 150,
          }}
        />
        <VenueInput
          isRequired={true}
          input={"mediaUrl"}
          handleInputChange={(e) => setMediaUrl(e.target.value)}
        />
        <VenueInput
          isRequired={true}
          input={"mediaAlt"}
          handleInputChange={(e) => setMediaAlt(e.target.value)}
        />
        <VenueInput
          isRequired={true}
          input={"price"}
          handleInputChange={handlePriceChange}
          inputError={priceError}
        />
        <VenueInput
          isRequired={true}
          input={"maxGuests"}
          handleInputChange={handleMaxGuestsChange}
          inputError={maxGuestsError}
        />
        <VenueInput
          isRequired={true}
          input={"rating"}
          handleInputChange={handleRatingChange}
          inputError={ratingError}
        />
        <VenueInput
          isRequired={false}
          input={"city"}
          handleInputChange={(e) => setCity(e.target.value)}
        />
        <VenueInput
          isRequired={false}
          input={"country"}
          handleInputChange={(e) => setCountry(e.target.value)}
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
            sx={{ marginY: "2rem" }}
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
        <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
          <Button type="submit" variant="contained" sx={{ marginLeft: "5rem" }}>
          Create
        </Button>
        </Box>
        
      </form>
      <FeedbackModal
        isOpen={openConfirmationModal}
        handleClose={handleCloseConfirmationModal}
        primaryText="Success"
        secondaryText="Your venue is created."
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
