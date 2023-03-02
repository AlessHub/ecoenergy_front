import React from 'react'; 
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const SliderHours = () => {
    function valuetext(value) {
        return `${value}hrs`;
      }
  return (
    <>
       <Box sx={{ width: 420, mt: 7 }}>
      <Slider
        aria-label="number of items"
        defaultValue={0}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={24}
        color="primary"
      />
    </Box>
    </>
  )
}

export default SliderHours

