import React, { useState } from 'react'
import {TestimonialsInfo} from '../../Data/TestimonialsInfo'
import './Testimonial.css'
// import { useParams } from 'react-router-dom'

function Testimonial() {
    const [selected] = useState(0);
    
  return (
    <div className='about reverse'>
          
      <div className='right-section'>
          <div></div>
          <div></div>
          <img src={TestimonialsInfo[selected].image}  alt="" />
      </div>

      <div className='left-section'> 
        <span>{TestimonialsInfo[selected].dESC}</span>
        <span>{TestimonialsInfo[selected].description}</span>
      </div>
      
    </div>
  )
}

export default Testimonial