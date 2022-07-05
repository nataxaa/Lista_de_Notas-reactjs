import {createGlobalStyle} from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root{
  --background-color: black
  --background-input:#A2A77F
}


*{
  margin: 0 auto ;
  align-items:center ;
  text-align:center ;
}

body{
  background-color: #0F0F0F ;
  font-family:sans-serif;
  color:white ;
}

button.button-open-modal{
  background-color:#00E052 ;
  padding:8px ;
  border-radius:10px ;
  border: none;
  outline:none ;
  cursor: pointer;
  :hover{
    opacity:0.8 ;
  }
}

.react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
     .react-modal-content {
    width: 100%;
    max-width: 300px;
    height:350px ;
    background-color: white;
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
    }

div .area-post{
  margin-left:2rem ;
  margin-right:2rem ;
  background-color:#1B1B1E;
  padding:10px ;
  margin-top:2rem ;
  border-radius:10px ;
}


`


