import React from 'react'
import { useMovieContext } from '../context/movieContext'

export default function Moviebox({movie}) {

  const { addToFav, removeFromFav, isFav } = useMovieContext()
  const favorite = isFav(movie.id)

  const handleFav = (e) => {
    e.preventDefault()
    if(favorite){
      removeFromFav(movie.id)
    }else{
      addToFav(movie)
    }
  }

  return (
    <div className='movie-box'>
        <div className='movie-box-inner'>
            <div className='movie-image'>
                <button className={`movie-fav-icon ${favorite ? "liked": ""}`} onClick={handleFav}> ❤︎ </button>
                {movie.poster_path !== null 
                ?<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                :<img src="https://picsum.photos/seed/picsum/500/750" alt={movie.title} />}
                
            </div>
            <div className='movie-name'>{movie.title}</div>
            <div className='movie-year'>{movie.release_date.split("-")[0]}</div>
        </div>
    </div>
  )
}
