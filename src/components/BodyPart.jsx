import React from 'react'
import { Stack,Typography } from '@mui/material'

import icons from '../assets/icons/gym_8065747.png'

const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
    <Stack 
    type="button"
    alignItems={'center'}
    justifyContent={'center'}
    className='bodyPart-card'
    sx={bodyPart === item ? 
      { borderTop: '4px solid #ff2625' ,
      backgroundColor: '#fff',
      borderBottomLeftRadius: '20px',
      width: '270px',
      height: '280px',
      cursor: 'pointer' , 
      gap: '40px'
    }
    : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={() =>{
      setBodyPart(item);
      window.scrollTo({top:1800, left:100, behavior:'smooth'})
    }}
    
    > 
      <img src={icons} alt='dumbbell' style={{width: '40px', height:'40px'} } />
      <Typography fontSize={'24px'} fontWeight={'bold'} color={'#3A1212'} textTransform={'captialize'}>
        {item}
        </Typography>
       </Stack>
  )
}

export default BodyPart;