import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'><img alt='netflix' src='/src/images/logo1.png' width={100} /></div>
        <ul className='nav'>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </ul>
    </div>
  )
}
