import styled from 'styled-components'



export const Post = styled.div`


display:grid ;
grid-template-columns:1fr 1fr 1fr ;


gap:1rem;

div.today{
   
    background-color:#E52E4D ;
    width:26rem;
    height:10rem ;
    border-radius:10px ;
    display:flex ;
    flex-direction:column ;
    padding-top:10px ;
    padding-bottom:10px ;
}
div.tomorrow{
   
   background-color:#33CC95 ;
   width:26rem;
   height:10rem ;
   border-radius:10px ;
   display:flex ;
   flex-direction:column ;
   padding-top:10px ;
   padding-bottom:10px ;
}
div.nextday{
   
   background-color:#12AFCE ;
   width:26rem;
   height:10rem ;
   border-radius:10px ;
   display:flex ;
   flex-direction:column ;
   padding-top:10px ;
   padding-bottom:10px ;
}
button.button-remove{
    position:relative ;
    top:-9rem ;
    right:-12rem ;
    background:none ;
    border:none ;
    outline:none ;
    cursor: pointer;
    font-size:16px ;
}

div.descri{
    
    background-color:#1B1B1E ;
   width:20rem ;
    height:7rem ;
    border-radius:10px ;
    padding:10px ;
    word-wrap: break-word ;

    
}
span.title{
    font-size:1.5rem ;
}



`