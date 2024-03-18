import * as React from "react";
import { useState } from "react";
import {Link, Routes, Route, useNavigate} from 'react-router-dom'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
interface FormState {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function FormDialog({ state, setState }: FormState) {
  console.log(state);
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState<string>("");
  const navigate = useNavigate();
  const handleClose = () => {
    setState(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={state}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            navigate(`/mail?name=${name}`)
            handleClose();
          },
        }}
      >
        <DialogTitle>OLA!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To Get started with the the service please neter the name of the
            service.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
