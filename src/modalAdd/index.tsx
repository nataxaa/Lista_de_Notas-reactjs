import { useContext, useState } from 'react';
import Modal from 'react-modal'
import { CartContext } from '../Context/post';
import { Container } from './style';
import { useId } from "react-id-generator";

Modal.setAppElement('#root');

interface modalProps{
    isOpen:boolean;
    onRequestClose:()=>void;
}

interface itemProps{
    id:number,
    title: string,
    description: string
}


export function ModalAdd({isOpen, onRequestClose}:modalProps){
    const [title, setTitle] = useState<string>()
    const [descri, setDescri] = useState<string>()
    const  {post, AddPost}:any = useContext(CartContext)
    

    console.log(post)

    function xx(id:any, title:any, descri:any){
        if(title == '' || descri == ''){
            alert('Titulo ou descrição não escritos')
        }else{
            AddPost(id, title, descri)
            setTitle('')
            setDescri('')
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

            <button onClick={e=>xx(post.length + 1, title, descri)}>Adicionar Nota</button>

            
            </Container>
        </Modal>
    )
}