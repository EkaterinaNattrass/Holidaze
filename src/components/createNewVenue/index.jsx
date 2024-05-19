import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, Modal, TextField } from "@mui/material";
import { postData } from "../../utils/postData";
import { API_BASE_URL } from "../../utils/constants";

export default function CreateNewVenue({ isNewVenueShown, handleNewVenueClose }) {
  const navigate = useNavigate();
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

/*   const validateForm = () => {
    let isValid = true;

    if (name.length < 1 && name.trim() === "") {
     // setNameError("Please provide the venue's name");
      isValid = false;
    } else {
     // setNameError("");
    }

    if (description.length < 1 && description.trim() === "") {
    //  setDescriptionError("Please provide the venue's description");
      isValid = false;
    } else {
     // setDescriptionError("");
    }

    if (media.trim() === "") {
    }

    if (price.length < 1 && price.trim() === "") {
    //  setPriceError("Please set the venue's price");
      isValid = false;
    } else {
     // setPriceError("");
    }

    const parsedMaxGuests = parseFloat(maxGuests);
    if (
      isNaN(parsedMaxGuests) ||
      parsedMaxGuests <= 0 ||
      parsedMaxGuests > 20
    ) {
    //  setMaxGuestsError();
      isValid = false;
    } else {
     // setMaxGuestsError("");
    }

    return isValid;
  }; */

  const onFormSubmit = async (e) => {
    e.preventDefault();
/* 
    if (validateForm()) { */
      try {
        const data = {
          name: name,
          description: description,
          media: [
            {
              url: mediaUrl,
              alt: mediaAlt,
            }
          ] ,
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
      /*   if (media.trim() !== "") {
          data.media = media.split(",").map((url) => url.trim());
        } */

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
        //   setShowSuccessModal(true);
      } catch (error) {
        //  setShowErrorModal(true);
        //   setShowSuccessModal(false);
      }
    }
/*   }; */

  return (
    <form onSubmit={onFormSubmit}>
      <Box
        component="div"
        sx={{
          "& > :not(style)": {
            m: 1,
            width: { xs: "25ch", sm: "30ch" },
          },
          ml: "1rem",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          size="small"
          id="name"
          label="Venue name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-label="Name of the venue"
        />
      </Box>
      <Box
        component="div"
        sx={{
          "& > :not(style)": {
            m: 1,
            width: { xs: "25ch", sm: "30ch" },
          },
          ml: "1rem",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          size="small"
          multiline
          id="description"
          label="Venue description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          aria-label="Desccription of the venue"
        />
      </Box>
      <Box
        component="div"
        sx={{
          "& > :not(style)": {
            m: 1,
            width: { xs: "25ch", sm: "30ch" },
          },
          ml: "1rem",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          size="small"
          id="mediaUrl"
          label="Image url"
          name="mediaUrl"
          value={mediaUrl}
          onChange={(e) => setMediaUrl(e.target.value)}
          aria-label="Images of the venue"
        />
      </Box>
      <Box
        component="div"
        sx={{
          "& > :not(style)": {
            m: 1,
            width: { xs: "25ch", sm: "30ch" },
          },
          ml: "1rem",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          size="small"
          id="mediaAlt"
          label="Image description"
          name="mediaAlt"
          value={mediaAlt}
          onChange={(e) => setMediaAlt(e.target.value)}
          aria-label="Images of the venue"
        />
      </Box>
      <Box
        component="div"
        sx={{
          "& > :not(style)": {
            m: 1,
            width: { xs: "25ch", sm: "30ch" },
          },
          ml: "1rem",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          size="small"
          id="price"
          label="Venue price per night"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          aria-label="Price of the venue"
        />
      </Box>
      <Box
        component="div"
        sx={{
          "& > :not(style)": {
            m: 1,
            width: { xs: "25ch", sm: "30ch" },
          },
          ml: "1rem",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="city"
          size="small"
          label="City"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          aria-label="City of the venue"
        />
      </Box>
      <Box
        component="div"
        sx={{
          "& > :not(style)": {
            m: 1,
            width: { xs: "25ch", sm: "30ch" },
          },
          ml: "1rem",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="country"
          size="small"
          label="Country"
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          aria-label="Country of the venue"
        />
      </Box>
      <Box
        component="div"
        sx={{
          "& > :not(style)": {
            m: 1,
            width: { xs: "25ch", sm: "30ch" },
          },
          ml: "1rem",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="maxGuests"
          size="small"
          label="Max guests"
          name="maxGuests"
          value={maxGuests}
          onChange={(e) => setMaxGuests(e.target.value)}
          aria-label="Max guests for the venue"
        />
      </Box>
      <Box
        component="div"
        sx={{
          "& > :not(style)": {
            m: 1,
            width: { xs: "25ch", sm: "30ch" },
          },
          ml: "1rem",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="rating"
          size="small"
          label="Rating"
          name="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          aria-label="Rating of the venue"
        />
      </Box>
      <Button type="submit">Create a new venue</Button>
    </form>
  );
};

