import React from 'react';
import { Link} from "@mui/material";
import { Link as LinkReact } from "react-router-dom";

const LinkButton = ({text, to, color}) => {
  return (
    <>
        <Link 
            href={to}
            underline="none"
            color={color}
            sx={{textAlign:'left',
            display: 'flex',
            "&:hover": {
              color: "main.primary",
            },
          }}
            >{text}
        </Link>
      
    </>
  )
}

export default LinkButton