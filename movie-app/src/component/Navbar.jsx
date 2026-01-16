import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'><img alt='netflix' src={new URL('../images/logo1.png', import.meta.url).href} width={100} /></div>
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
