import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

export default function FeedbackModal ({
    isOpen,
    primaryText,
    secondaryText,
    handleOnClick,
    handleClose
  }) {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>{primaryText}</DialogTitle>
      <DialogContent>
        <DialogContentText>{secondaryText}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOnClick} color="primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

