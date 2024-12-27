import React from 'react';
import{ Link} from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <div className='Header'>
        <div className='Header-name'> DR FARM FOODS </div>
        <ul className='Items'>
          <li><Link  to="/Home"> Home</Link> </li>
          <li><Link  to="/About"> About Us</Link></li>
          <li><Link  to="/Testimonial"> Pages</Link></li>
          <li><Link  to="/Categories"> What We Offer</Link></li>
          <li><Link  to="/Footer"> Contact Us</Link></li>

        </ul>
    </div>
  )
}

export default Header