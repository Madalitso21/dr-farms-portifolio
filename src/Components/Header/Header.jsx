import React from 'react';
import{ Link} from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <div className='Header'>
        <div className='Header-name'> DR FARM FOODS </div>
        <ul className='Items'>
          <li><Link  to="/Home"> Home</Link> </li>
          <li><Link  to="/Categories"> Categories</Link></li>
          <li><Link  to="/Testimonial"> About Us</Link></li>
          <li><Link  to="/Footer"> Contact Us</Link></li>

        </ul>
    </div>
  )
}

export default Header