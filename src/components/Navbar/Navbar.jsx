import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt="QuickBite Logo" />
      
      
      <a 
        href="https://quick-bite-git-main-grim-62s-projects.vercel.app/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img className='profile' src={assets.profile_image} alt="Profile" />
      </a>
    </div>
  )
}

export default Navbar
