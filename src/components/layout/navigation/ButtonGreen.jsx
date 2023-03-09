import React from "react";
import { Button } from "@mui/material";
import { Link} from "@mui/material";
import { Link as LinkReact } from "react-router-dom";

const ButtonGreen = ({ text }) => {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          width: "fit-content",
          margin:'2rem',
          textTransform: "capitalize",
          backgroundColor: "main.buttons",
          color: "main.secondary",
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
        type="submit"
        href="/advice"
      >
        {text}
      </Button>
    </>
  );
};

export default ButtonGreen;
