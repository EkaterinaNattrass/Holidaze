import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

const FeedbackModal = (props) => {
  const {
    isOpen,
    handleClose,
    primaryText,
    secondaryText,
    handleOnClick,
  } = props;

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

export default FeedbackModal;
