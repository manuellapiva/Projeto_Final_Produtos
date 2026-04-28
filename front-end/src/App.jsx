import { Link, Routes, Route } from 'react-router-dom';
import Produtos from '../pages/Produtos'
import Home from '../pages/Home'
import Equipe from '../pages/Equipe'
import  './App.css'
function App() {
  return (
   <>
   <div className="full">
    <header className="topbar">
       <h1>Sistema de Gestão de Produtos <br />Grupo - 2</h1>
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
      </div>
   </>
  );
}

export default App