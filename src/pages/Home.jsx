import React from 'react';
import { Box } from '@mui/material';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
import Slider from '../components/Slider/Slider';
import Heroslider from '../components/Heroslider';

const Home = () => {
  return (
    <Box>
      <Slider />
      <Heroslider />
      <SearchExercises />
      <Exercises />
      </Box>
  )
}

export default Home