import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import jwt_decode from "jwt-decode";
import { TextField, Grid, Button, Box, Typography } from "@mui/material";



function PostComment({id}) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitComment = async (formData) => {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    };
    const response = await axios.post(
      "http://127.0.0.1:8000/api/comments",
      formData,
      { headers }
    );

    console.log("response form ", response.data);
  };

  const customSubmit = (response) => {
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    const user_id = decodedToken.sub;
    const forum_id = id;
   

    
    const formData = new FormData();
    formData.append("content", response.content);
    // formData.append("description", response.description);
    formData.append("autor", response.autor);
    // formData.append("image", response.image[0], response.image[0].name);   
    formData.append("user_id", user_id);
    formData.append("forum_id", forum_id);
    
    handleSubmitComment(formData);
    
    swal("Submitted form!", "Successful validation", "success");
    // navigate("/:id");
  };

  return (
    <>
      

      <Box
        component="form"
        sx={{
          p: 5,
          display: "flex",
          margin: "auto",
          
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
        {/* <Typography color="main.tertiary" sx={{ mb: 4 }} variant="h3">
          Post
        </Typography> */}
        {/* <Grid container spacing={3}> */}
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="Autor"
              type="text"
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
            <TextField
              type="text"
              variant="outlined"
              label="Content"
              fullWidth
              multiline
              rows={6}
              {...register("content", {
                required: true,
                minLength: 5,
                maxLength: 1000,
              })}
              error={errors.content}
              helperText={
                errors.content?.type === "required"
                  ? "The field cannot be empty"
                  : errors.content?.type === "minLength"
                  ? "The minimum characters must be 5"
                  : errors.content?.type === "maxLength"
                  ? "The maximum characters should be 200"
                  : ""
              }
            />
          </Grid>

          {/* <Grid item xs={12}>
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
          </Grid> */}

          {/* <Grid item xs={12}>
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
        </Grid> */}

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

export default PostComment;