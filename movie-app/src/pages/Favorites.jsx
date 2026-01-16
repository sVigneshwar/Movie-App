import React from 'react'
import Moviebox from '../component/Moviebox'

export default function Favorites() {
  return (
    <div className='favorites'>
        <div className='no-favoites'>
          <p>No favorites found</p>
        </div>
        <div className='movie-grid'>
          <Moviebox />
        </div>
      </div>
  )
}
