import React from 'react';
import { Link} from "@mui/material";

const LinkButton = ({text}) => {
  return (
    <>
        <Link 
            href="#" 
            underline="none"
            color='main.primary'
            sx={{textAlign:'left',
            display: 'flex'
          }}
            >{text}
        </Link>
    </>
  )
}

export default LinkButton