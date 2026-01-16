import { useContext, useState, useEffect, createContext } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext)

export default function MovieProvider({children}) {
    const [fav, setFav] = useState([])

    //check if already fav is available, set in favorites array
    useEffect(() => {
        const storedFav = localStorage.getItem("fav")
        if(storedFav){
            setFav(JSON.parse(storedFav))
        }
    }, [])

    //if fav array is updated, update in localstorage
    useEffect(() => {
        localStorage.setItem('fav', JSON.stringify(fav))
    }, [fav])


    const addToFav = (movie) => {
        setFav(prev => [...prev, movie])
    }

    const removeFromFav = (movieId) => {
        setFav(fav.filter(movie => movie.id !== movieId))
    }

    const isFav = (movieId) => {
        return fav.some(movie => movie.id === movieId)
    }

    const value = {
        fav,
        addToFav,
        removeFromFav,
        isFav
    }

  return (
    <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
  )
}
