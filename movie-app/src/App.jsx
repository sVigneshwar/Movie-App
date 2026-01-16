import { useState } from 'react'
import './styles/app.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import {Routes, Route} from 'react-router-dom'
import MovieProvider from './context/movieContext'

function App() {
  return (
    <>
    <MovieProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </MovieProvider>
    </>
  )
}

export default App
