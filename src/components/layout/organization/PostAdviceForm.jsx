import React, { useState, useRef } from "react";
import { Link as LinkReact, useNavigate } from "react-router-dom";
import {
  Link as LinkMui,
  TextField,
  Typography,
  Grid,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { postAdvice } from "../../../services/user-service";
import ButtonGreen from "../navigation/ButtonGreen";

function PostAdvice() {
  const [formData, setFormData] = useState({
    content: "",
    type: "",
    value: "",
  });
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const timerRef = useRef(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      const { data } = await postAdvice(formData, { headers });
      setUser(data.user);
      setOpenModal(true);
      timerRef.current = setTimeout(handleCloseModal, 2000);
    } catch (error) {
      setError(error);
    }
  };

  const handleCloseModal = () => {
    clearTimeout(timerRef.current);
    setOpenModal(false);
    navigate("/advice");
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          p: 5,
          display: "flex",
          margin: "auto",
          flexDirection: "column",
          alignItems: "center",
          "& .MuiTextField-root": {
            mb: 3,
            width: "100%",
          },
          "& .MuiButton-root": {
            width: "50%",
          },
          "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "main.primary",
            color: "main.primary",
          },
        }}
        onSubmit={handleSubmit}
      >
        <Typography color="main.tertiary" sx={{ mb: 4 }} variant="h3">
          Add an Advice
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="content"
              type="text"
              name="content"
              fullWidth
              multiline
              rows={4}
              value={formData.content}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              sx={{ background: "" }}
              label="type"
              type="number"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="value"
              type="number"
              name="value"
              value={formData.value}
              onChange={handleChange}
              required
            />
          </Grid>
        </Grid>

        <ButtonGreen
            text='Add'
          />
        
        <Dialog open={openModal} onClose={handleCloseModal}>
          <Box
            sx={{
              "&:hover": {
                color: "main.primary",
              },
            }}
            underline="none"
            color="main.secondary"
          >
            <DialogTitle>Advice created!</DialogTitle>
            <DialogContent>
              <p></p>
            </DialogContent>
          </Box>
        </Dialog>
      </Box>
      {error && (
        <div className="mt-6 text-center text-red-500">
          {error.message ? error.message : String(error)}
        </div>
      )}
      {user && (
        <div className="mt-6 text-center">
          <h3 className="text-gray-700 font-medium">User Details</h3>
          <p>
            <strong className="text-gray-700">Name:</strong> {user.name}
          </p>
          <p>
            <strong className="text-gray-700">Email:</strong> {user.email}
          </p>
        </div>
      )}
    </>
  );
}

export default PostAdvice;
