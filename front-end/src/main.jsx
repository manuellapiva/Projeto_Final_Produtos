import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Produtos from '../pages/produtos.jsx'
import Equipe from '../pages/equipe.jsx'
import Home from '../pages/home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Produtos/>
    <Equipe/>
    <Home/>
  </StrictMode>,
)
