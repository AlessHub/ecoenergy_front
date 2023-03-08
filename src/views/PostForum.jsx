import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import jwt_decode from "jwt-decode";
import { TextField, Grid, Button, Box, Typography } from "@mui/material";

// import { postForum } from "../services/user-service";
import NavPublic from "../components/layout/navigation/Navbar/NavPublic";

function PostForum() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitPost = async (formData) => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    };
    const response = await axios.post(
      "http://127.0.0.1:8000/api/forums",
      formData,
      { headers }
    );

    console.log("response form ", response.data);
  };

  const customSubmit = (response) => {
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    const user_id = decodedToken.sub;

    
    const formData = new FormData();
    formData.append("title", response.title);
    formData.append("description", response.description);
    formData.append("autor", response.autor);
    formData.append("image", response.image[0], response.image[0].name);   
    formData.append("user_id", user_id);
    
    handleSubmitPost(formData);
    
    swal("Submitted form!", "Successful validation", "success");
    navigate("/forum");
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
          gap: "2rem",
          maxWidth: "500px",
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
        onSubmit={handleSubmit(customSubmit)}
      >
        <Typography color="main.tertiary" sx={{ mb: 4 }} variant="h3">
          Post
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="Title"
              type="text"
              fullWidth
              {...register("title", {
                required: true,
                maxLength: 200,
              })}
              error={errors.title}
              helperText={
                errors.title?.type === "required"
                  ? "The field cannot be empty"
                  : errors.title?.type === "maxLength"
                  ? "Maximum characters are eight"
                  : ""
              }
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              type="text"
              variant="outlined"
              label="Description"
              fullWidth
              multiline
              rows={6}
              {...register("description", {
                required: true,
                minLength: 5,
                maxLength: 1000,
              })}
              error={errors.description}
              helperText={
                errors.description?.type === "required"
                  ? "The field cannot be empty"
                  : errors.description?.type === "minLength"
                  ? "The minimum characters must be 5"
                  : errors.description?.type === "maxLength"
                  ? "The maximum characters should be 200"
                  : ""
              }
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              type="text"
              variant="outlined"
              label="autor"
              fullWidth
              {...register("autor", {
                required: true,
                maxLength: 200,
              })}
              error={errors.autor}
              helperText={
                errors.autor?.type === "required"
                  ? "The field cannot be empty"
                  : errors.autor?.type === "maxLength"
                  ? "Maximum characters are eight"
                  : ""
              }
            />
          </Grid>

          <Grid item xs={12}>
            <input
              accept="image/*"
              id="contained-button-file"
              type="file"
              {...register("image", {
                required: true,
              })}
            />
            <label htmlFor="contained-button-file">
              
            </label>
            {errors.image?.type === "required" && (
              <small className="fail">The field cannot be empty</small>
            )}
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
          Send
        </Button>
      </Box>
    </>
  );
}

export default PostForum;
