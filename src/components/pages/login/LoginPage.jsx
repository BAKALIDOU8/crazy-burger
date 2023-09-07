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
  background: red;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

