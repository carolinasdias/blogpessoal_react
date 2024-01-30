import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar';
import Home from './paginas/home/Home'
import Cadastro from './paginas/cadastro/Cadastro';
import Login from './paginas/login/Login';
import { AuthProvider } from './contexts/AuthContext';
import ListaTemas from './components/temas/listaTemas/ListaTemas';
import FormularioTema from './components/temas/formularioTema/FormularioTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import ListaPostagens from './components/postagens/listaPostagens/ListaPostagens';
import FormularioPostagem from './components/postagens/formularioPostagem/FormularioPostagem';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'
import Perfil from './paginas/perfil/Perfil';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';

function App() {
  return (
    <>
    <AuthProvider>
      <ToastContainer />
    <BrowserRouter>
     <Navbar/>
     <div className="min-h-[80vh]">
     <Routes>
     <Route path="/" element={<Login />} />
     <Route path="/login" element={<Login />} />
     <Route path="/home" element={<Home />} />
     <Route path="/cadastro" element={<Cadastro />} />
     <Route path="/temas" element={<ListaTemas />} />
     <Route path="/cadastroTema" element={<FormularioTema />} />
     <Route path="/editarTema/:id" element={<FormularioTema />} />
     <Route path="/deletartema/:id" element={<DeletarTema />} />
     <Route path="/postagens" element={<ListaPostagens />} />
     <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
     <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
     <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
     <Route path="/perfil" element={<Perfil />} />
     </Routes>
     </div>
     <Footer/>
    </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App