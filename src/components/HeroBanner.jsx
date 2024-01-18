import React from 'react'
import { Box, Stack, Typography , Button} from '@mui/material'

import heroBannerImage from '../assets/images/3.png'

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: {lg: '212px', xs: '70px'},
      ml: {sm: '50px'}
    }} position={'relative'} p='20px'>
      <Typography color={'darkred'} fontWeight={'700'} fontSize={ '24px'}>
        Fitness Hub
      </Typography>
      <Typography fontWeight={'700px'} color={'#212121'} fontStyle={'italic'}
      sx={{fontSize: {lg: '44px', xs: '40px'}}} mb="24px" mt="30px">
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize={'40px'} lineHeight={'35px'} fontFamily={'algerian'}>
        Check out the most effective exercises
        </Typography>
        <Button variant="contained" color='error'>EXPLORE EXERCISES</Button>
    <img src={heroBannerImage} alt='banner' className='hero-banner' />
    </Box>
  )
}

export default HeroBanner;