import React, { useState } from "react";
import { Popover, Button } from "@mui/material";
import UpdateVenueForm from "../updateVenueForm";

export default function UpdateVenueModal({ initialData }) {
  const [anchorElUpdateVenue, setAnchorElUpdateVenue] = useState(null);
  const [selectedVenue, setSelectedVenue] = useState(initialData);
  const openUpdate = Boolean(anchorElUpdateVenue);
  const idUpdate = openUpdate ? "update-popover-venue" : undefined;

  const handleOpenUpdate = (event) => {
    setAnchorElUpdateVenue(event.currentTarget);
    setSelectedVenue(initialData);
  };

  const handleCloseUpdate = () => {
    setAnchorElUpdateVenue(null);
    setSelectedVenue(null);
  };

  return (
    <>
      <Popover
        id={idUpdate}
        open={openUpdate}
        anchorEl={anchorElUpdateVenue}
        onClose={handleCloseUpdate}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <UpdateVenueForm
          venue={selectedVenue}
          handleClose={handleCloseUpdate}
        />
      </Popover>
    </>
  );
}
