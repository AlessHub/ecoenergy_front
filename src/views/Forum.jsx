import React,{useState}from 'react';
import NavPublic from "../components/layout/navigation/Navbar/NavPublic";
import GridForum from "../components/layout/organization/GridForum";
import Footer from "../components/layout/navigation/Footer";
import IconButton from "@mui/material/IconButton";

import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { Link as LinkReact } from "react-router-dom";
import { Link as LinkMui, TextField, Button } from "@mui/material";

import { Checkbox } from "@mui/material";


import AvatarPlaceholder from '../../src/assets/avatar_template.png'
import { Container } from '@mui/system';
import CardMedia from '@mui/material/CardMedia';

import axios from "axios";


// const endpoint = "https://energy-production-b228.up.railway.app/api/forums";



function Forum() {


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
        const response = await axios.post('http://127.0.0.1:8000/api/forums', formData, { headers });
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





const Forum = () => {
  return (
    <>

      <NavPublic />
      <GridForum/>
  <Footer/>

    </>
  )
}}

export default Forum;
