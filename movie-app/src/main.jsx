import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { CacheProvider } from './context/CacheContext'

createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="/Movie-App/">
      <CacheProvider>
        <App />
      </CacheProvider>
    </BrowserRouter>
)
