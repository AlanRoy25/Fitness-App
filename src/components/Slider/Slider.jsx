import React, { useState } from 'react'
import './Slider.css'

const Slider = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  if (!images || images.length === 0) {
    return <p>No images to display.</p>;
  }

  

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1)% images.length;
    setCurrentIndex(newIndex)
  }
 
  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  return (  
    <div className="slider">
      <button onClick={goToPrevSlide}>Previous</button>
      <img src={process.env.PUBLIC_URL + images[currentIndex]} alt={`Slider ${currentIndex + 1}`} />
      <button onClick={goToNextSlide}>Next</button>
    </div>
  );
};

export default Slider;