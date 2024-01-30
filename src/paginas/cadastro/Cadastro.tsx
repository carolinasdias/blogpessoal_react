import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { cadastrarUsuario } from "../../services/Service"
import { useNavigate } from "react-router-dom"
import Usuario from "../../models/Usuario"
import { RotatingLines } from "react-loader-spinner"
import 'react-toastify/dist/ReactToastify.css';
import { toastAlerta } from "../../util/toastAlerta"

function Cadastro() {

  // Criamos uma constante que recebe o hook useNavigate, para podermos redirecionar o usuário
  const navigate = useNavigate()

  // Variavel de Estado de Carregamento - usada para indicar que está havendo alguma requisição ao Back
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // Variavel de Estado de Senha - usada para verificar se as senhas foram digitadas iguais
  const [confirmaSenha, setConfirmaSenha] = useState<string>("")

  // Variavel de Estado do Usuário - Registra um Objeto da Interface Usuario que armazena os dados que foram digitados nos inputs do formulario
  const [usuario, setUsuario] = useState<Usuario>({
     id: 0,
     nome: '',
     usuario: '',
     senha: '',
     foto: ''
 })

 useEffect(() => {
     if (usuario.id !== 0) {
         retornar()
     }
 }, [usuario])

  // Função que envia o usuario a pagina de login, através das rotas
  function retornar() {
     navigate('/login')
 }

 // Função que através do evento de mudança de um Input, captura o que foi digitado e através da função setUsuario() atualiza o estado/objeto de usuario
 function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
     setUsuario({    // atualiza o estado Usuario com os dados digitados no input

         ...usuario,    //  o spread operator (...) espalha os atributos do objeto para facilitar a atualização


         /*  com o spread operator, o react entende o objeto assim:
             id: 0,
             nome: '',
             usuario: '',
             senha: '',
             foto: ''
         */

         // O lado esquerdo, representa qual input chamou essa função e qual atributo do Objeto Usuario que será acessado, a parte direita pega o valor digitado
         [e.target.name]: e.target.value
     })
     console.log(usuario)
 }

 // Função que através do evento de mudança de um Input, captura o que foi digitado e através da função setConfirmaSenha() atualiza o estado de senha
 function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
     setConfirmaSenha(e.target.value)

     console.log(confirmaSenha)
 }

 // Função assincrona que vai cadastrar o usuário
 async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
     e.preventDefault() // através do parametro E que representa um os eventos do Formulario, impedimos que o Form recarregue a página ao tentar enviar os dados

     // Verificamos se as senhas digitadas são iguais e se tem mais que 8 caracteres
     if(confirmaSenha === usuario.senha && usuario.senha.length >= 8){

        setIsLoading(true)
  
        try{
          await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario)
          toastAlerta('Usuário cadastrado com sucesso!', "sucesso")
        }catch(error){
          toastAlerta('Erro ao cadastrar o usuário!', "erro")
        }
      } else {
        toastAlerta('Dados estão inconsistentes. Verifique as informações do cadastro', "erro")
        setUsuario({...usuario, senha: ''})
        setConfirmaSenha('')
      }
  
      setIsLoading(false)
     }
 return (
     <>
         <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
             <div className="fundoCadastro hidden lg:block"></div>
             <form className='flex justify-center items-center flex-col w-2/3 gap-3'
                 onSubmit={cadastrarNovoUsuario}  // onSubmit é o evento que dispara a função de cadastro quando o usuário clica em cadastrar 
                 >    

                 <h2 className='text-slate-900 text-5xl'>Cadastrar</h2>
                 <div className="flex flex-col w-full">
                     <label htmlFor="nome">Nome</label>
                     <input
                         type="text"
                         id="nome"
                         name="nome"
                         placeholder="Nome"
                         className="border-2 border-slate-700 rounded p-2"
                         value={usuario.nome}   // Conecta esse input com o atributo nome do estado/objeto usuario
                         onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}  // Quando o usuario digitar algo, chama a função atualizarEstado
                         
                     />
                 </div>
                 <div className="flex flex-col w-full">
                     <label htmlFor="usuario">Usuario</label>
                     <input
                         type="text"
                         id="usuario"
                         name="usuario"
                         placeholder="Usuario"
                         className="border-2 border-slate-700 rounded p-2"
                         value={usuario.usuario}
                         onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                     />
                 </div>
                 <div className="flex flex-col w-full">
                     <label htmlFor="foto">Foto</label>
                     <input
                         type="text"
                         id="foto"
                         name="foto"
                         placeholder="Foto"
                         className="border-2 border-slate-700 rounded p-2"
                         value={usuario.foto}
                         onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                     />
                 </div>
                 <div className="flex flex-col w-full">
                     <label htmlFor="senha">Senha</label>
                     <input
                         type="password"
                         id="senha"
                         name="senha"
                         placeholder="Senha"
                         className="border-2 border-slate-700 rounded p-2"
                         value={usuario.senha}
                         onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                     />
                 </div>
                 <div className="flex flex-col w-full">
                     <label htmlFor="confirmarSenha">Confirmar Senha</label>
                     <input
                         type="password"
                         id="confirmarSenha"
                         name="confirmarSenha"
                         placeholder="Confirmar Senha"
                         className="border-2 border-slate-700 rounded p-2"
                         value={confirmaSenha}
                         onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
                     />
                 </div>
                 <div className="flex justify-around w-full gap-8">
                     <button className='rounded text-white bg-red-400 hover:bg-red-700 w-1/2 py-2' onClick={retornar}>
                         Cancelar
                     </button>
                     <button type='submit' className='rounded text-white bg-indigo-400 hover:bg-indigo-900 w-1/2 py-2 flex justify-center'>

                         {
                         // Renderização Condicial - Se isLoading for true mostra o componente de carregamento
                         isLoading ? <RotatingLines
                             strokeColor="white"
                             strokeWidth="5"
                             animationDuration="0.75"
                             width="24"
                             visible={true}
                         /> :    // Se não, mostra apenas o Cadastrar
                             <span>Cadastrar</span>
                         }

                     </button>
                 </div>
             </form>
         </div>
     </>
 )
}

export default Cadastro

