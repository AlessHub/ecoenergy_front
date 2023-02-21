import React from 'react';
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const NewFilePost = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
  
    useEffect(() => {
      if (selectedImage) {
        setImageUrl(URL.createObjectURL(selectedImage));
      }
    }, [selectedImage]);
    
  return (
    <Box
    component="form"
      sx={{'& > :not(style)': { m: 1, width: '100ch' },}}
      noValidate
      autoComplete="off"
    >
      <TextField label="Title" variant="filled" color="success" focused />
      <TextField label="Username" variant="filled" color="success" focused />
      <<TextField
          id="filled-textarea"
          label="Content"
          placeholder="write your mensage here"
          multiline
          variant="filled"
        />
      <input
            accept="image/"
            type="file"
            id="select-image"
            style={{ display: 'none' }}/>
        <label htmlFor="select-image">
                <Button variant="contained" color="primary" component="span">
                    Upload Image
                </Button>
        </label>
    </Box>
  );
};
export default NewFilePost;