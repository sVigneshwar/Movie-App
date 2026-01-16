import React from 'react'

export default function Moviebox({movie}) {
  return (
    <div className='movie-box'>
        <div className='movie-box-inner'>
            <div className='movie-fav-icon'> ❤︎ </div>
            <img src='movie-name' alt='movie-name' />
            <div className='movie-name'>Movei name</div>
            <div className='movie-year'>Movei year</div>
        </div>
    </div>
  )
}
