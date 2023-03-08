import React, { useState } from "react";

import { Link as LinkReact, useNavigate } from "react-router-dom";
import NavPublic from "../components/layout/navigation/Navbar/NavPublic";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link as LinkMui, TextField, Button, Grid } from "@mui/material";

import { postAdvice } from "../services/user-service";

function PostAdvice() {
  const [formData, setFormData] = useState({
    content: "",
    type: "",
    value: "",
  });
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

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
      navigate("/advice");
    } catch (error) {
      setError(error);
    }
  };
   

  return (
    <>
      <NavPublic />

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
          Add an advice
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

        <Button
          type="submit"
          sx={{
            textTransform: "capitalize",
            backgroundColor: "main.tertiary",

            "&:hover": {
              backgroundColor: "main.primary",
              borderColor: "main.primary",
              boxShadow: "none",
              color: "main.secondary",
            },
            "&:active": {
              boxShadow: "none",
              backgroundColor: "main.primary",
              borderColor: "main.primary",
              color: "main.secondary",
            },
            "&:focus": {
              boxShadow: "0 0 0 0.2rem main.primary",
            },
          }}
          variant="contained"
        >
          Add
        </Button>
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
