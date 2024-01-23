import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import { AuthProvider } from "./contexts/AuthContext"
import Home from "./paginas/home/Home"
import Login from "./paginas/login/Login"
import Cadastro from "./paginas/cadastro/Cadastro"
import ListaTemas from "./components/temas/listaTemas/ListaTemas"
import Footer from "./components/footer/Footer"
import FormTema from "./components/temas/formularioTema/FormularioTema"
import DeletarTema from "./components/temas/deletarTema/DeletarTema"

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastrartema" element={<FormTema />} />
              <Route path="/editartema/:id" element={<FormTema />} />
              <Route path="/deletartema/:id" element={<DeletarTema />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App