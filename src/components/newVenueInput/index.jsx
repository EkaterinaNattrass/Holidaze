import React from "react";
import { Box, TextField } from "@mui/material";

export default function NewVenueInput({
  input,
  handleInputChange,
  inputError,
  isRequired,
}) {
  return (
    <Box
      component="div"
      sx={{
        "& > :not(style)": {
          m: 1,
          width: "30ch",
        },
        ml: "1rem",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required={isRequired}
        size="small"
        id={input}
        label={`Venue ${input}`}
        name={input}
        onChange={handleInputChange}
        aria-label={`Name of the ${input}`}
        error={!!inputError}
        helperText={inputError}
      />
    </Box>
  );
}
