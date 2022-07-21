import React, { useContext, useState } from 'react';
import { CartContext, CartProvider } from './Context/post';
import {ModalAdd} from './modalAdd'
import { PostNotas } from './PostNotas';



interface itemProps{
  id:any,
  title: string,
  description: string
}



function App() {

  
  const [modal, setModal] = useState(false)

  function handleOpenModal(){
    setModal(true)
  }
  function handleCloseModal(){
    setModal(false)
  }


 
  return (
    <CartProvider>

    <div className="App">
    
    <header>
      <h1>Bloco de Notas</h1>
      <button className='button-open-modal' onClick={handleOpenModal}>Adicionar Nota</button>
      <ModalAdd isOpen={modal} onRequestClose={handleCloseModal}/>
    </header>

    <div className='table-importante'>
        <h3>Tabela de Importancia</h3>
        <ul>
          <li><span className='red'>vermelho</span>: Fazer Hoje</li>
          <li><span className='green'>verde</span>: Fazer Amanhã</li>
          <li><span className='blue'>azul</span>: Fazer Depois</li>
        </ul>
    </div>

    <div className='area-post'>
    <PostNotas/>
    </div>
    
    </div>

    
    </CartProvider>
     
    
     
     );
}

export default App;
