import React from 'react'
import Moviebox from '../component/Moviebox'
import { useMovieContext } from '../context/movieContext'

export default function Favorites() {
  const {fav} = useMovieContext()

  if(fav && fav.length > 0){
    return(
      <>
      <h2 className='fav-title'>Your Favorites</h2>
      <div className='movie-grid'>
      {
        fav.map(fav => {
          return <Moviebox movie={fav} key={fav.id} />
        })   
      }
      </div>
      </>
    )
  }

  return (
    <div className='favorites'>
        <div className='no-favoites'>
          <p>No favorites found</p>
        </div>
      </div>
  )
}
