import styled from 'styled-components'


export const Container = styled.div`
    margin-top: -2rem ;
    display:flex ;
    flex-direction:column ;
    color:black ;

    label{
        margin-top:1rem ;
    }
    input{
        padding:10px ;
        border-radius:10px ;
        background-color:#EFF1C5 ;
        border: 0 ;
        outline:none ;
    }
    input.description{
        padding:10px ;
        border-radius:10px ;
        background-color:#EFF1C5 ;
        border: 0 ;
        outline:none ;
        height:4rem ;
       
    }
    button.button-remove-modal{
        background:none ;
        border:none ;
        outline:none ;
        cursor: pointer;
        position:relative ;
        top:-2rem ;
        right:-11rem ;
        font-size:16px ;
    }

    button{
        margin-top:1rem ;
        padding:8px ;
        border-radius:10px ;
        border:none ;
        outline:none ;
    }

    div.button-style{
        display:flex ;
        gap:1rem;
    }

`
interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'blue' | 'red' |'green' ;
  }

  const colors = {
    green: '#33CC95',
    red: '#E52E4D',
    blue: '#12AFCE'
  }


export const ButtonColor = styled.button<RadioBoxProps>`

cursor:pointer;

background: ${(props) => props.isActive 
    ? colors[props.activeColor]
    : '#EFF1C5'};



`