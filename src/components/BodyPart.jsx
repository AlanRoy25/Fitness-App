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
    sx={ {
      borderTop:bodyPart === item ? '4px solid #ff2625' : '',
      backgroundColor: '#fff',
      borderBottomLeftRadius: '20px',
      width: '270px',
      height: '280px',
      cursor: 'pointer' , 
      gap: '20px'
    }
    }
    > 
      <img src={icons} alt='dumbbell' style={{width: '80px', height:'70px'} } />
      <Typography fontSize={'24px'} fontWeight={'bold'} color={'#3A1212'} textTransform={'captialize'}>
        {item}
        </Typography>
       </Stack>
  )
}

export default BodyPart;