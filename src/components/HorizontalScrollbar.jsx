import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ExerciseCard from './ExerciseCard.jsx';
import BodyPart from './BodyPart';
import LeftArrowIcon from '../assets/icons/left-arrows_7268565.png'
import RightArrowIcon from '../assets/icons/right-arrow_271228.png'
import React, { useContext} from 'react';
import { Typography } from '@mui/material';

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 11,
    slidesToScroll: 1,
    autoplay: true,
  };

  
  const LeftArrow = ({ onClick }) => (
    <Typography onClick={onClick} className="left-arrow">
      <img src={LeftArrowIcon} alt="left-arrow" style={{width:'200px', height:'200px'}}/>
    </Typography>
  );

  const RightArrow = ({ onClick }) => (
    <Typography onClick={onClick} className="right-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );

  return (
    <Slider {...settings} nextArrow={< RightArrow />} LeftArrow={<LeftArrow />}>
      {data.map((item) => (
        <div key={item.id || item}>
          {bodyParts ? (
            <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </div>
      ))}
    </Slider>
  );
};

export default HorizontalScrollbar;
