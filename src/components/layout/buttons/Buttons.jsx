import React from 'react'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import EuroIcon from '@mui/icons-material/Euro';

import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';


function Buttons() {
  return (
    <Stack direction="row" spacing={8} sx={{display:'flex', justifyContent:'center', marginTop:'3rem'}}>
      <IconButton aria-label="electric"  sx={{border:'1px solid #5DB075', color:'#5DB075', "&:hover": {
                      backgroundColor: "main.primary",
                      borderColor: "main.primary",
                      boxShadow: "none",
                      color: "main.secondary",
                    }}}>
        <ElectricBoltIcon />
      </IconButton>
      <IconButton aria-label="water"  sx={{border:'1px solid #1263ce', color:'#1263ce',  "&:hover": {
                      backgroundColor: "#1263ce",
                      borderColor: "#1263ce",
                      boxShadow: "none",
                      color: "main.secondary",
                    }}}>
        <InvertColorsIcon />
      </IconButton>
      <IconButton aria-label="money" sx={{border:'1px solid #beb451', backgroundColor:'transparent', color:'#beb451',  "&:hover": {
                      backgroundColor: "#beb451",
                      borderColor: "#beb451",
                      boxShadow: "none",
                      color: "main.secondary",
                    }}}>
        <EuroIcon/>
      </IconButton>
    </Stack>
  )
}

export default Buttons
