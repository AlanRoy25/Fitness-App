import React from 'react'
import Slider from './Slider/Slider'

const Heroslider = () => {
  const images = [
  '/public/1.jpg',
  '/public/2.jpg',
  '/public/3.jpg'
  ]
  
  return (
    <div>
    <Slider images ={images} />
    </div>
  )
}

export default Heroslider