import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='left-f'>
            <div className='mission-description'>
               <div className='collaborate'>
                 <span>Lets collaborate</span>
               </div>
               <div className='callforaction'>
                <span>
                    ready to transform your business , organisation with innovative solutions ? contact me today to explore how we can achieve sucess, growth , excellence together.
                </span>
                </div>
            </div>
         </div>
         <div className='right-f'>
           <div className='contact-details'>
            <div className='information'> <span>CONTACT DETAILS</span></div>
            <div className='location'><span>Zomba, Malawi</span></div>
            <div className='email'> <span>dorothyfarmfoods22@gmail.com</span></div>
            <div className='contact'> <span>+265 881180818</span></div>
           </div>
         </div>
    </div>
  );
}

export default Footer