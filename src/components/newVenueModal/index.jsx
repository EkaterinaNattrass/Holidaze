import React, { useState } from "react";
import { Popover, Button } from "@mui/material";
import NewVenueForm from "../newVenueForm";

export default function NewVenueModal({ addNewVenue }) {
  const [anchorElVenue, setAnchorElVenue] = useState(null);
  const openVenue = Boolean(anchorElVenue);
  const idVenue = openVenue ? "simple-popover-venue" : undefined;

  const handleClickVenue = (event) => {
    setAnchorElVenue(event.currentTarget);
  };
  const handleCloseVenue = () => {
    setAnchorElVenue(null);
  };

  const handleNewVenueCreated = (newVenue) => {
    addNewVenue(newVenue);
    handleCloseVenue();
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClickVenue}
        sx={{ width: "10rem", marginTop: "2rem" }}
      >
        New venue
      </Button>
      <Popover
        id={idVenue}
        open={openVenue}
        anchorEl={anchorElVenue}
        onClose={handleCloseVenue}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <NewVenueForm
          handleCloseVenue={handleCloseVenue}
          onVenueCreated={handleNewVenueCreated}
        />
      </Popover>
    </>
  );
}
