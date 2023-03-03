import React from 'react';
import {Button} from "@mui/material";

const ButtonGreen = ({text}) => {
  return (
    <>
        <Button
         variant="contained"
         sx={{
            width: 'fit-content' ,
           textTransform: 'capitalize',
           backgroundColor: "main.primary",
           "&:hover": {
             backgroundColor: "main.primary",
             borderColor: "main.primary",
             boxShadow: "none",
             color: "main.secondary"
           },
           "&:active": {
             boxShadow: "none",
             backgroundColor: "main.primary",
             borderColor: "main.primary",
             color: "main.secondary"
           },
           "&:focus": {
             boxShadow: "0 0 0 0.2rem main.primary",
           },
         }}
         href="#contained-buttons"
         >
            {text}
        </Button>
    </>
  )
}

export default ButtonGreen