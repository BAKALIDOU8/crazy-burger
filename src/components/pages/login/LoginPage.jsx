import { useState } from "react"
import LoginForm from "./LoginForm"
import styled from 'styled-components';
import Logo from "../../reusable-ui/Logo";

export default function LoginPage() {
  // render 
  return ( 
  <LoginPageStyled>
    <Logo className={"logo-login-page"} />
    <LoginForm/>
  </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ::before{
    content: "";
    background: url(/img/burger-background.jpg) ;
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

  .logo-login-page{
    h1{
      font-size: 95px;
      width: 200px;
    }
    img{
      height: 200px;
      width: 200px;
    }
    
  }
`;

