import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu'
import rightarrows from '../assets/icons/fast-forward-double-right-arrows-symbol_54366.png'
import leftarrows from '../assets/icons/double-arrow_8867470.png'
import BodyPart from './BodyPart'

const LeftArrow = ()=>{
  const {scrollPrev} = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollPrev()} className='left-arrow'>
      <img src={leftarrows} alt='leftarrow' />
    </Typography>
  )
}


const RightArrow = ()=>{
  const {scrollNext} = useContext(VisibilityContext)
  return (
    <Typography onClick={() => scrollNext()} className='right-arrow'>
      <img src={rightarrows} alt='rightarrow' />
    </Typography>
  )
}


const HorizontalScrollbar = ({data, bodyPart, setBodyPart}) => {
  return (
    <ScrollMenu leftArrow={LeftArrow} RightArrow={RightArrow} >
     {data.map((item) => (
      <Box
        key={item.id || item} 
        itemID = { item.id || item}
        title= {item.id || item}
        m={'0 40px'}
        >
          <BodyPart item={item} BodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
     )
     )}
      </ScrollMenu>
  )
}

export default HorizontalScrollbar