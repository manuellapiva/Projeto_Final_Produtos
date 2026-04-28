import { Link, Routes, Route } from 'react-router-dom';
import Produtos from '../pages/produtos'
import Home from '../pages/home'
import Equipe from '../pages/equipe'
import  './App.css'
function App() {
  return (
   <>
    <header className="toopbar">
       <h1>Sistema de Gestão de Produtos Grupo - 2</h1>
    </header>
          <nav className="menu">
        <Link to="/home">Home</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/equipe">Equipe</Link>
      </nav>

      <main className="content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/equipe" element={<Equipe />} />
        </Routes>
      </main>
            <footer>
        <p>
          &copy; 2026 - Sistema de Gestão de Produtos Grupo-2 | 
          Desenvolvido para atividade final de Desenvolvimento de Sistemas - Front-End
        </p>
      </footer>
   </>
  );
}

export default App