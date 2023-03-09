import React from "react";
import { Button } from "@mui/material";

const ButtonGreen = ({ text }) => {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          width: "fit-content",
          margin:'2rem',
          textTransform: "capitalize",
          backgroundColor: "main.tertiary",
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
        href="/signup"
      >
        {text}
      </Button>
    </>
  );
};

export default ButtonGreen;
