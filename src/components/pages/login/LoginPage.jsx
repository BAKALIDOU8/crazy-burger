import { useState } from "react"
import LoginForm from "./LoginForm"
import styled from 'styled-components';
import Logo from "../../reusable-ui/Logo";

export default function LoginPage() {
  // render 
  return ( 
  <LoginPageStyled>
    <Logo/>
    <LoginForm/>
  </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ::before{
    content: "";
    background: url(/public/img/burger-background.jpg) ;
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

