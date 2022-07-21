import { useContext, useState } from 'react';
import Modal from 'react-modal'
import { CartContext } from '../Context/post';
import { ButtonColor, Container } from './style';


Modal.setAppElement('#root');
interface modalProps{
    isOpen:boolean;
    onRequestClose:()=>void;
}

export function ModalAdd({isOpen, onRequestClose}:modalProps){
    const [title, setTitle] = useState<string>()
    const [descri, setDescri] = useState<string>()
    const [type, setType] = useState<string>()

    const  {post, AddPost}:any = useContext(CartContext)

    console.log(post)

    function AdicionarNota(id:any, title:any, descri:any, type:any){
        if(title == '' || descri == ''){
            alert('Titulo ou descrição não escritos')
        }else{
            AddPost(id, title, descri, type)
            setTitle('')
            setDescri('')
            setTitle('')
            onRequestClose()
        }
    }

    return(
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <Container>
                <button className='button-remove-modal' onClick={onRequestClose}>x</button>
            <h1>Adicione sua nota.</h1>
            <label>Titulo</label>
            <input
            type="text"
            placeholder='Digite o titulo aqui...'
            value={title}
            onChange={e=>setTitle(e.target.value)}
            />
            <label>Descrição</label>
            <input
            className='description'
            type="text"
            placeholder='Digite a descrição...'
            value={descri}
            onChange={e=>setDescri(e.target.value)}
            />
            <div className='button-style'>

            <ButtonColor
               type='button' 
               onClick={ () => { setType('today') }}
               isActive={type === 'today'}
               activeColor="red"
            >
                <span>Fazer Hoje</span>
            </ButtonColor>
            <ButtonColor
               type='button' 
               onClick={ () => { setType('tomorrow') }}
               isActive={type === 'tomorrow'}
               activeColor="green"
               >
                <span>Fazer Amanhã</span>
            </ButtonColor>
            <ButtonColor
               type='button' 
               onClick={ () => { setType('nextday') }}
               isActive={type === 'nextday'}
               activeColor="blue"
               >
                <span>Pode Fazer Depois</span>
            </ButtonColor>
                </div>
            <button onClick={e=>AdicionarNota(post.length + 1, title, descri, type)}>Adicionar Nota</button>

            
            </Container>
        </Modal>
    )
}