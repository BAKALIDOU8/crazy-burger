import React from 'react'
import styled from 'styled-components';
export default function Logo() {
  return ( <LogoStyled>
    
        <h1> CRAZY</h1>
        <img src="/public/img/logo-orange.png" alt="Logo crazy burger" />
        <h1> BURGER</h1> 
    

    </LogoStyled>
  )
}

const LogoStyled = styled.div`
  color: white;
  display: flex;
  align-items: center;
  border : 1px solid blue ;
  
h1{
    display: inline;
    text-align: center;
    color: #FFA01B;
    font-size: 90px;
    line-height: 1em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
}

img{
    object-fit: contain;
    object-position: center;
    height: 90px;
    width: 120px;
    margin: 0%.5px;
  }
`;