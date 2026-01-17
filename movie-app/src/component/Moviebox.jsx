import React from 'react'
import { useMovieContext } from '../context/movieContext'
import MovieDetailsModal from './MovieDetailsModal'

export default function Moviebox({movie}) {

  const [modalIsOpen, setIsOpen] = React.useState(false);

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

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const getPosterUrl = () => {
    return movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : 'https://picsum.photos/seed/picsum/500/750'
  }

  const getYear = () => {
    return movie.release_date ? movie.release_date.split('-')[0] : 'N/A'
  }

  return (
    <div className='movie-box'>
        <button className={`movie-fav-icon ${favorite ? "liked": ""}`} onClick={handleFav}> ❤︎ </button>
        <div className='movie-box-inner' onClick={openModal}>
            <div className='movie-image'>        
                <img src={getPosterUrl()} alt={movie.title} />
            </div>
            <div className='movie-name'>{movie.title}</div>
            <div className='movie-year'>{getYear()}</div>
        </div>
        
        <MovieDetailsModal 
          isOpen={modalIsOpen}
          onClose={closeModal}
          movie={movie}
          isFavorite={favorite}
          onFavoriteClick={handleFav}
        />
    </div>
  )
}
