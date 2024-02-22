import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import Logo from './Images/Netflix_Logo_PMS.png'
function Navbar() {
  return (
    <div>
        <div className='navbar_container'>
          <div className="logo">
            <NavLink to="/">
            <img src={Logo} />
            </NavLink>
            </div>
            <div className='language' >
              <select className='box-style'>
                <option>English</option>
                <option>Hindi</option>
              </select>
              <NavLink to="/signin" className='box-style sign_in' style={{textDecoration:'none'}}>
              Sign In
              </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
