import Popup from 'reactjs-popup';
import './ModalPostagem.css';
import FormPostagem from '../formPostagem/FormPostagem';

function ModalPostagem() {
    return (
        <>
            <Popup  // É a Janela que se abre ao clicarmos no Botão para exibir o Formulário
                trigger={   // É um gatilho (botão) que sempre pressionado abre o Modal/PopUp/Janela
                    // É o botão que é clicado e abre o Modal
                    <button className='border rounded px-4 hover:bg-white hover:text-indigo-800'>
                        Nova postagem
                    </button>
                } modal>
                <div>
                    {/* Conteúdo do Modal, no caso o Formulario de Postagem */}
                    <FormPostagem />
                </div>
            </Popup>
        </>
    );
}

export default ModalPostagem;