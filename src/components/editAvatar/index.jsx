import { useState } from "react";
import putData from "../../utils/putData";
import { API_BASE_URL } from "../../utils/constants";
import { loadFromLocalStorage } from "../../utils/localStorage";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";

export default function EditAvatar ({ isShown, handleClose, handleAvatarUpdate }) {
  
  const [media, setMedia] = useState("");

  const onFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const storedProfile = loadFromLocalStorage("profile");
      const apiBody = {
        avatar: {
          url: media,
          alt: "Avatar image",
        },
      };
      
      const newAvatar = await putData(
        `${API_BASE_URL}holidaze/profiles/${storedProfile.name}`,
        apiBody
      );
      const updatedProfile = { ...storedProfile, avatar: newAvatar.avatar };
      localStorage.setItem("profile", JSON.stringify(updatedProfile));
      handleClose();
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Dialog open={isShown} onClose={handleClose}>
      <DialogTitle sx={{ width: { xs: "15rem", md: "30rem" } }}>
        Edit Avatar
      </DialogTitle>
      <DialogContent>
        <form onSubmit={onFormSubmit}>
          <TextField
            autoFocus
            margin="dense"
            label="Avatar URL"
            type="url"
            fullWidth
            variant="outlined"
            value={media}
            onChange={(e) => setMedia(e.target.value)}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onFormSubmit} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
