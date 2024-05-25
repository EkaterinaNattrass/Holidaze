import React, { useState } from "react";
import { Popover, Button } from "@mui/material";
import NewVenue from "../newVenueForm";

export default function NewVenueModal() {
  const [anchorElVenue, setAnchorElVenue] = useState(null);
  const openVenue = Boolean(anchorElVenue);
  const idVenue = openVenue ? "simple-popover-venue" : undefined;

  const handleClickVenue = (event) => {
    setAnchorElVenue(event.currentTarget);
  };
  const handleCloseVenue = () => {
    setAnchorElVenue(null);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickVenue} sx={{width: '10rem'}}>
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
        <NewVenue handleCloseVenue={handleCloseVenue} />
      </Popover>
    </>
  );
}
