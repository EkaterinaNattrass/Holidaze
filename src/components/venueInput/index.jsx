import React from "react";
import { Box, TextField } from "@mui/material";

export default function NewVenueInput({
  input,
  handleInputChange,
  inputError,
  isRequired,
  value
}) {
  return (
    <Box
      component="div"
      sx={{
        "& > :not(style)": {
          m: 1,
          width: {sm: "30ch"},
        },
        ml: "1rem",
      }}
      noValidate
    >
      <TextField
        required={isRequired}
        size="small"
        id={input}
        label={`Venue ${input}`}
        name={input}
        value={value}
        onChange={handleInputChange}
        aria-label={`Name of the ${input}`}
        error={!!inputError}
        helperText={inputError}
      />
    </Box>
  );
}
