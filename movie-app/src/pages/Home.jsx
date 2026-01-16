import React from 'react'
import Moviebox from '../component/Moviebox'

export default function Home() {
  return (
    <div className='home'>
        <div className='searchbox'>
          <input type='text' placeholder='Search Movie' />
          <button>Search</button>
        </div>
        <div className='movie-grid'>
          <Moviebox />
        </div>
    </div>
  )
}
