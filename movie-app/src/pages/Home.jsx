import React, { useEffect, useState } from 'react'
import Moviebox from '../component/Moviebox'
import { getMovieData, searchMovieData } from '../services/movieData'

const SAMPLE_IMAGE = "https://image.tmdb.org/t/p/w500/pHpq9yNUIo6aDoCXEBzjSolywgz.jpg"

function randomTitle(){
  const adj = ["Dark","Lost","Silent","Last","Hidden","Crimson","Burning","Golden","Frozen","Broken","Secret","Midnight"]
  const noun = ["Empire","Night","Journey","Promise","Horizon","Legacy","Echo","Shadows","Reckoning","Passage","Galaxy","Memory"]
  return `${adj[Math.floor(Math.random()*adj.length)]} ${noun[Math.floor(Math.random()*noun.length)]}`
}

// generate 10 test movies using the same poster image and random titles
const test = Array.from({length:10}).map((_,i) => ({
  id: i+1,
  poster_path: SAMPLE_IMAGE,
  title: randomTitle(),
  release_date: "2025-08-16"
}))

export default function Home() {
  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [showPagination, setShowPagination] = useState(true)


  useEffect(() => {
    const getData = async function(){
      if(!pageNumber) return
      setLoading(true)
      try{
        const res = await getMovieData(pageNumber)
        console.log(res);
        setMovies(res)
      }catch(err){
        console.log(err);
        setError(err)
      }finally{
        setLoading(false)
      }
    }

    getData()
  }, [pageNumber])


  const handleSearch = async (e) => {
    e.preventDefault()
    if(!search.trim()) return;
    setPageNumber(null)
    setLoading(true)
    setShowPagination(false)
    try{
      const res = await searchMovieData(search)
      setError(null)
      setMovies(res)
    }catch(err){
      console.log(error);
      setError(err)
      
    }finally{
      setLoading(false)
    }
  }

  const reset = () => {
    setPageNumber(1)
    setShowPagination(true)
    setSearch("")
  }

  return (
    <div className='home'>
        <div className='searchbox'>
          {!showPagination && <button className='clear' onClick={reset}>X</button>}
          <form onSubmit={handleSearch}>
            <input type='text' placeholder='Search Movie' value={search} onChange={e => setSearch(e.target.value)} />            
            <button className='submit' type='submit'>Search</button>
          </form>
        </div>
        
        {/* <div className='loading'></div> */}
        {error && <p>Somthing went wrong...</p>}
        {loading 
        ? <div className='loading'></div>
        : <div className='movie-grid'>
            {
              movies.map(movie => {
                return <Moviebox movie={movie} key={movie.id} />
              })
            }
          </div>}

          {showPagination && <div className='pagination'>
            <ul>
              <li><button className={pageNumber === 1 ? 'active' : ''} onClick={() => setPageNumber(1)}>1</button></li>
              <li><button className={pageNumber === 2 ? 'active' : ''} onClick={() => setPageNumber(2)}>2</button></li>
              <li><button className={pageNumber === 3 ? 'active' : ''} onClick={() => setPageNumber(3)}>3</button></li>
              <li><button className={pageNumber === 4 ? 'active' : ''} onClick={() => setPageNumber(4)}>4</button></li>
            </ul>
          </div>}
    </div>
  )
}
