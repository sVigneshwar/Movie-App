import { useState } from 'react'
import './styles/app.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/favorites' element={<Favorites />} />
    </Routes>
    </>
  )
}

export default App
