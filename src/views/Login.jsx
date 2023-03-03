
import React, { useState , useEffect} from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { Link as LinkReact, useNavigate } from "react-router-dom";

import { Link as LinkMui, TextField, Button } from "@mui/material";
import NavPublic from "../components/layout/navigation/Navbar/NavPublic";
import LinkButton from "../components/layout/navigation/LinkButton";
import Footer from "../components/layout/navigation/Footer";
import ButtonGreen from '../components/layout/navigation/ButtonGreen';

import axios from "axios";
// import axios from "../api/axios";

import { Login } from "@mui/icons-material";

const LoginMui = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  //redirect to..
  const navigate = useNavigate();

  //token
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);


  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', formData);
      console.log(response.data);
      setUser(response.data.user);
      // localStorage.getItem('token', response.data.token);
      // const newToken = response.data.token;
      // setToken(newToken);
      localStorage.getItem('token', token);
      navigate("/profile");
    } catch (error) {
      // setError(error.response.data.message);
      console.error(error);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   try{
  //     await axios.post('/login', formData);
  //     console.log(response.data);
  //     setFormData(response.data.user);
  //     // setUser(response.data.user);
  //     LocalStorage.getItem('token', token);
  //     navigate("/profile");

  //   } catch(e){
  //     console.log(e)

  //   }
  // }
  


  return (
    <>
    <NavPublic/>
    <Container
      component="form"
      sx={{
        display: "flex",
        mt: 1,
        flexDirection: "column",
        justifyContent: 'space-between',
        alignItems: "center",
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "main.primary",
          color:'main.primary'
        },
        gap: 2
      }}
      onSubmit={handleSubmit}
    >

    <Typography color="main.tertiary" variant="h3">
      Log In
      </Typography>
    
      <TextField sx={{minWidth: '30%'}}
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}

      />
      <TextField sx={{minWidth: '30%'}}
        label="Password "
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <ButtonGreen
            text='Log In'/>
      <LinkReact to="/NavLoggedIn.jsx"></LinkReact>
      <Typography 
        variant="p">
        <LinkButton text='Forgot your password?'/>
      </Typography>
      <Typography
        variant="p">

        New user?{" "}

        <LinkButton text='Sign up'/>

      </Typography>
    </Container>
    <Footer/>

    </>
  );
};

export default LoginMui;
