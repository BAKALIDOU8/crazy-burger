import React from 'react'
import styled from 'styled-components';
import { theme } from '../../theme';

export default function Logo({className , onClick}) {
  return (<LogoStyled className={className} onClick={onClick} >

    <h1> CRAZY</h1>
    <img src="/img/logo-orange.png" alt="Logo crazy burger" />
    <h1> BURGER</h1>

  </LogoStyled>
  )
}

const LogoStyled = styled.div`
  color: ${theme.colors.white};
  display: flex;
  align-items: center;
  
h1{
    display: inline;
    text-align: center;
    color: ${theme.colors.primary};
    font-size: 40px;
    line-height: 1em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
}

img{
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px;
    margin: 0.5px;
  }
`;