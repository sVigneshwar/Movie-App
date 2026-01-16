import React from 'react'

export default function Moviebox({movie}) {
  return (
    <div className='movie-box'>
        <div className='movie-box-inner'>
            <div className='movie-image'>
                <button className='movie-fav-icon'> ❤︎ </button>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </div>
            <div className='movie-name'>{movie.title}</div>
            <div className='movie-year'>{movie.release_date.split("-")[0]}</div>
        </div>
    </div>
  )
}
