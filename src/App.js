import React from 'react'
import './App.css';
import './components/Slider/Slider.css'
import {Route, Routes} from 'react-router-dom'
import {Box} from '@mui/material'
import ExerciseDetail from './pages/ExerciseDetail'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx'



const App = () => {
  return (
    <Box width = "400px">
      <Navbar />
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/exercise/:id' element= {<ExerciseDetail />} />
      </Routes>
      <Footer />
      </Box>
  )
}

export default App
 