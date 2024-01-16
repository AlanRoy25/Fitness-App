import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <Stack
    direction={'row'}
    justifyContent={'space-around'}
    sx={{gap: {
      sm:'122px', xs: '120px'
    }, mt: {
      sm: '32px',
      xs: '20px',
      justifyContent: 'center'
    }}}
    >
      <Link to ='/'>
        <img src={process.env.PUBLIC_URL + '/Logo.png'} alt="logo" style={{width: '86px', height: '86px', margin: '0 20px'}} />
      </Link>
      <Stack 
      direction="row"
      gap = "40px"
      fontSize= "25px"
      alignItems={'flex-end'}
      borderBottom={'3px solid #212121'}>
        <Link to ="/" style={{ textDecoration: 'none', color: 'black'}}>Home</Link>
        <a href="/exercises" style={{textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar
