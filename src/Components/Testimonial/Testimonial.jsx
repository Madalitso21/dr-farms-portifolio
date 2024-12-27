import React, { useState } from 'react'
import {TestimonialsInfo} from '../../Data/TestimonialsInfo'
import { useParams } from 'react-router-dom'

function Testimonial() {
    const [selected] = useState(0);
    
  return (
    <div className='About'>
        
    <div className='right-section'>
        <div></div>
        <div></div>
        <img src={TestimonialsInfo[selected].image}  alt="" />

        <div className='Personal-info'>
        <div> <span>{TestimonialsInfo[selected].name}</span></div>
        <div> <span>{TestimonialsInfo[selected].email}</span></div>
        <div> <span>{TestimonialsInfo[selected].number}</span></div>
        </div>   
    </div>
    
    <div className='left-section'> <span>{TestimonialsInfo[selected].description}</span></div>
    </div>
  )
}

export default Testimonial