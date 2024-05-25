import Calendar from "react-calendar";
import { useEffect, useState } from "react";
import { loadFromLocalStorage } from "../../utils/localStorage";
import { API_BASE_URL } from "../../utils/constants";
import { postData } from "../../utils/postData";
import {
  convertToIsoDateInString,
  convertFromDateToIsoOutput,
  convertIsoDateToNoon,
} from "../../utils/converts";
import { Box, Button, TextField, Paper, Typography } from "@mui/material";
import FeedbackModal from "../feedbackModal";

export default function BookingCalendar({ venue, id }) {
  const [numGuests, setNumGuests] = useState(1);
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [bookedDates, setBookedDates] = useState([]);
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const [openErrorModal, setOpenErrorModal] = useState(false);

  const handleCloseErrorModal = () => {
    setOpenErrorModal(false);
  };

  const handleCloseConfirmationModal = () => {
    setOpenConfirmationModal(false);
  };

  const token = loadFromLocalStorage("token");
  const profile = loadFromLocalStorage("profile");

  useEffect(() => {
    if (venue && venue.bookings) {
      const bookings = () => {
        let extractedDates = [];
        venue.bookings &&
          venue.bookings.forEach((booking) => {
            const startDate = new Date(convertIsoDateToNoon(booking.dateFrom));
            const endDate = new Date(convertIsoDateToNoon(booking.dateTo));
            //  const currentDate = new Date(startDate);

            while (startDate <= endDate) {
              const isoDateString = convertToIsoDateInString(startDate);
              if (!extractedDates.includes(isoDateString)) {
                extractedDates.push(isoDateString);
              }
              startDate.setDate(startDate.getDate() + 1);
            }
          });

        setBookedDates(extractedDates);
      };
      bookings();
    }
  }, [venue]);

  const setCalendarDate = (date) => {
    if (checkInDate === null) {
      setCheckInDate(date);
      setCheckOutDate(date);
    } else if (checkOutDate === null && date >= checkInDate) {
      const isAnyDateBooked = bookedDates.some((bookedDate) => {
        return (
          bookedDate >= convertToIsoDateInString(checkInDate) &&
          bookedDate <= convertToIsoDateInString(date)
        );
      });

      if (isAnyDateBooked) {
        setCheckInDate(date);
        setCheckOutDate(null);
      } else {
        setCheckOutDate(date);
      }
    } else {
      setCheckInDate(date);
      setCheckOutDate(null);
    }
  };

  const disableDate = ({ date }) => {
    const isoDateString = convertToIsoDateInString(date);
    const newDate = new Date();
    newDate.setHours(0, 0, 0, 0);
    return date < newDate || bookedDates.includes(isoDateString);
  };

  const calculateDateRange = (startDate, endDate) => {
    let dates = [];
    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const bookVenue = async () => {
    try {
      const apiBody = {
        dateFrom: convertToIsoDateInString(new Date(checkInDate)),
        dateTo: convertToIsoDateInString(new Date(checkOutDate)),
        guests: Number(numGuests),
        venueId: id,
      };
      const booking = await postData(
        `${API_BASE_URL}holidaze/bookings`,
        apiBody
      );
      console.log(booking);
      setOpenConfirmationModal(true);
      const newBookedDates = calculateDateRange(checkInDate, checkOutDate).map(
        (date) => convertToIsoDateInString(date)
      );
      setBookedDates((prevDates) => [...prevDates, ...newBookedDates]);
    } catch (error) {
      console.log(`An error occurred: ${error.message}`);
      setOpenErrorModal(true);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <TextField
          type="number"
          label="Guests"
          variant="outlined"
          inputProps={{ min: 1, max: venue.maxGuests }}
          value={numGuests}
          onChange={(e) => setNumGuests(e.target.value)}
          sx={{ width: "4rem", marginTop: "0.5rem" }}
        />
       {/*  <Paper elevation={1} sx={{ padding: "0.5rem", width: "6rem" }}>
          <Typography>
            <b>Check-In: </b>
            {checkInDate
              ? convertFromDateToIsoOutput(checkInDate)
              : "Not selected"}
          </Typography>
        </Paper>
        <Paper elevation={1} sx={{ padding: "0.5rem", width: "6rem" }}>
          <Typography>
            <b>Check-Out: </b>
            {checkOutDate
              ? convertFromDateToIsoOutput(checkOutDate)
              : "Not selected"}
          </Typography>
        </Paper> */}
      </Box>
      <Box sx={{ marginBottom: "2rem" }}>
        <Calendar
          onChange={setCalendarDate}
          value={
            checkInDate
              ? checkOutDate
                ? [checkInDate, checkOutDate]
                : checkInDate
              : null
          }
          tileDisabled={disableDate}
        />
      </Box>
      <Box sx={{ marginBottom: "2rem" }}>
        {token && profile && !profile.venueManager ? (
          <Button variant="contained" color="primary" onClick={bookVenue}>
            Book
          </Button>
        ) : (
          <Typography color="primary">Log in to book</Typography>
        )}
      </Box>
      <FeedbackModal
        isOpen={openConfirmationModal}
        handleClose={handleCloseConfirmationModal}
        primaryText="Success"
        secondaryText="You booked the venue."
        handleOnClick={handleCloseConfirmationModal}
      />
      <FeedbackModal
        isOpen={openErrorModal}
        handleClose={handleCloseErrorModal}
        primaryText="Error"
        secondaryText="Booking failed, please try again."
        handleOnClick={handleCloseErrorModal}
      />
    </Box>
  );
}
