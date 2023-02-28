import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { Link as LinkReact } from "react-router-dom";
import { Link as LinkMui, TextField, Button } from "@mui/material";

import { Checkbox } from "@mui/material";

import NavPublic from '../components/layout/navigation/Navbar/NavPublic'
import AvatarPlaceholder from '../../src/assets/avatar_template.png'
import { Container } from '@mui/system';
import CardMedia from '@mui/material/CardMedia';

import axios from "axios";


// const endpoint = "https://energy-production-b228.up.railway.app/api/forums";



function PostForum() {


    // const [title, setTitle] = useState("");
    // const [description, setDescription] = useState("");
    // const [autor, setAutor] = useState("");
    // const [cover, setCover] = useState("");

    const [formData, setFormData] = useState({
      title: '',
      description: '',
      autor: '',
      cover: '',
    });

    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const token = localStorage.getItem("token");
        const headers = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          };
        const response = await axios.post('https://energy-production-b228.up.railway.app/api/forums', formData, { headers });
        console.log(response.data);
        setUser(response.data.user);
        
      
      } catch (error) {
        setError(error.response.data.message);
      }
    };
    

    // const handleCreateForum = async () => {
    //     try {
    //       const token = localStorage.getItem("token");
    //       const headers = {
    //         "Authorization": `Bearer ${token}`,
    //         "Content-Type": "application/json"
    //       };
    //       const response = await axios.post(endpoint, {
    //         title: title,
    //         description: description,
    //         autor: autor,
    //         cover: cover,
            
    //       }, { headers });
    //       console.log(response.data);
    //     } catch (error) {
    //       console.error(error.response.data.message);
    //     }
    //   };

      
  // const [formData, setFormData] = useState({});

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   handleCreateForum();
  // }




  return (
    <>
      <NavPublic />
      <Container sx={{p:{xs:0, sm:0, md:0, xl:0} ,display:'flex', flexDirection:'column', alignItems:'center'}}>
      <CardMedia
        component="img"
        alt="thumbnail"
        image={AvatarPlaceholder}
        sx={{
          overflow:'hidden', 
            width: '140px',
            height: '140px',
            // backgroundColor: 'red',
            maxWidth: '150px',
            mt: '-250px'
            }}
      />    
    </Container>

    {/* <form onSubmit={handleSubmit} class="w-full max-w-sm">
    <label htmlFor="title" class="block font-bold mb-2">Título:</label>
    <input type="text" value={title} onChange={e => setTitle(e.target.value)} id="title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    <label htmlFor="description" class="block font-bold mb-2">Descripción:</label>
    <input type="text" value={description} onChange={e => setDescription(e.target.value)} id="description" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    <label htmlFor="tech" class="block font-bold mb-2">Autor:</label>
    <input type="text" value={autor} onChange={e => setAutor(e.target.value)} id="autor" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    <label htmlFor="cover" class="block font-bold mb-2">Cover:</label>
    <input type="text" value={cover} onChange={e => setCover(e.target.value)} id="cover" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Crear forum</button>
  </form> */}


  <Box
      component="form"
      sx={{
        p: 5,
        display: "flex",
        maxWidth: "500px",
        margin: "auto",
        flexDirection: "column",
        alignItems: "center",
        "& .MuiTextField-root": {
          mb: 3,
          width: "100%",
        },
        "& .MuiButton-root": {
          width: "100%",
        },   "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "main.primary",
          color:'main.primary'
        },
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        label="title"
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        id="title"
        required
      />
      <TextField
        label="description"
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        id="description"
        required
      />
      <TextField
        label="autor"
        type="text"
        name="autor"
        value={formData.autor}
        onChange={handleChange}
        id="autor"
        required
      />
      <TextField
        label="cover"
        type="file"
        name="cover"
        value={formData.cover}
        onChange={handleChange}
        id="cover"
        required
      />

      <Button
        type="submit"
        sx={{
          textTransform: "capitalize",
          backgroundColor: "main.primary",
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
        Crear Post
      </Button>
      {/* <LinkReact to="/NavLoggedIn.jsx"></LinkReact>

      <Typography sx={{ mt: 1, color: "green" }} variant="p">
        Forgot your password?
      </Typography>
      <Typography
        sx={{ mt: 1, display: "flex", flexDirection: "row", gap: 1 }}
        variant="p"
      >
        New user?{" "}
        <Typography sx={{ mt: 0, color: "green" }} variant="p">
          {" "}
          Sign up
        </Typography>
      </Typography> */}
    </Box>

    {error && (
    <div className="mt-6 text-center text-red-500">
      {error}
    </div>
  )}
  {user && (
    <div className="mt-6 text-center">
      <h3 className="text-gray-700 font-medium">User Details</h3>
      <p><strong className="text-gray-700">Name:</strong> {user.name}</p>
      <p><strong className="text-gray-700">Email:</strong> {user.email}</p>
    </div>
  )}

    </>
  )
}

export default PostForum;
