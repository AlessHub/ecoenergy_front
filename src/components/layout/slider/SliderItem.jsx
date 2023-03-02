import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { green } from '@mui/material/colors';


function valuetext(value) {
  return `${value}itens`;
}

const SliderItem =  () => {
  return (
    <>
      <Box sx={{ width: 250, mt: 7 }}>
      <Slider
        aria-label="number of items"
        defaultValue={0}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={5}
        
        
      />
    </Box>
   
    </>
  )
}

export default SliderItem
