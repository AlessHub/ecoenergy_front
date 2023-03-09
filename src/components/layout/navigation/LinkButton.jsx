import React from 'react';
import { Link} from "@mui/material";
import { Link as LinkReact } from "react-router-dom";

const LinkButton = ({text, to}) => {
  return (
    <>
        <LinkReact to={to}><Link 
            href="#" 
            underline="none"
            color='main.primary'
            sx={{textAlign:'left',
            display: 'flex',
            "&:hover": {
              color: "main.tertiary",
              
            },
          }}
            >{text}
        </Link>
        </LinkReact>
    </>
  )
}

export default LinkButton