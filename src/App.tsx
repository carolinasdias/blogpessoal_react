import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./paginas/login/Login";
import Home from "./paginas/home/Home";
import Cadastro from "./paginas/cadastro/Cadastro";
import ListaTemas from "./components/temas/listaTemas/ListaTemas";
import FormTema from "./components/temas/formularioTema/FormularioTema";
import DeletarTema from "./components/temas/deletarTema/DeletarTema";
import ListaPostagens from "./components/postagens/listaPostagens/ListaPostagens";
import FormPostagem from "./components/postagens/formPostagem/FormPostagem";
import DeletarPostagem from "./components/postagens/deletarPostagem/DeletarPostagem";

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
              <Route path="/cadastrotema" element={<FormTema />} />
              <Route path="/editartema/:id" element={<FormTema />} />
              <Route path="/deletartema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastrarPostagem" element={<FormPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App