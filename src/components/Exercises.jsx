import React,{useEffect, useState} from 'react'
import { Pagination } from '@mui/material'
import {Box,Stack,Typography} from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard.jsx'

const Exercises = ({exercises,setExercises,bodyPart}) => {
  console.log(exercises);
  return (
    <Box id="exercises"
    sx={{mt: {lg:'110px'}}}
    mt='50px'
    p='20px'
    >
  <Typography variant='h5' mb={'45px'}>
    Showing Results
  </Typography>
  <Stack direction={"row"} sx={{gap: {lg:110, xs:'50px '}}}
  flexWrap={'wrap'} justifyContent={'center'} >
    {exercises.map((exercise, index) =>(
      <ExerciseCard key={index} exercise = {exercise} />
    ))}
  </Stack>
  </Box>
  )
}

export default Exercises