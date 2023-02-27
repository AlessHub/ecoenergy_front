import React from 'react'
import NavPublic from '../components/layout/navigation/Navbar/NavPublic'
import AvatarPlaceholder from '../../src/assets/avatar_template.png'
import { Container } from '@mui/system';
import CardMedia from '@mui/material/CardMedia';

import SimpleBarCharts from '../components/layout/organization/SimpleBarCharts';
import Footer from '../components/layout/navigation/Footer';
import Buttons from '../components/layout/buttons/Buttons';

function Profile() {
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
    <Container sx={{p:{xs:0, sm:0, md:20, lg:10, xl:4} }}>

    <SimpleBarCharts/>
    <Buttons/>
    </Container>

    {/* <Footer/> */}

    </>
  )
}

export default Profile
