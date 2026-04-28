import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Produtos from '../pages/produtos.jsx'
import Equipe from '../pages/equipe.jsx'
import Home from '../pages/home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Produtos/>
    <Equipe/>
    <Home/>
  </StrictMode>,
)
