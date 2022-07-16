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
    
    <div className='area-post'>
    <PostNotas/>
    </div>
    
    </div>

    
    </CartProvider>
     
    
     
     );
}

export default App;
