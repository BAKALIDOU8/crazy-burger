import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import {IoChevronForward} from "react-icons/io5"
import {BsPersonCircle} from "react-icons/bs"
import TextInput from '../../reusable-ui/TextInput';
import PrimaryButton from '../../reusable-ui/PrimaryButton';
import { theme } from '../../../theme';



export default function LoginForm() {
    // state
    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate()

    // comportement
    const handleSubmit = (event) => {
        event.preventDefault()
        setInputValue("")
        navigate(`./order/${inputValue}`)
    }
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }
    
    //render
    return (
        <LoginFormStyled action="submit" onSubmit={handleSubmit}>
                <h1>Bienvenue chez nous !</h1>
                <hr />
                <h2>Connecter-vous</h2>
            <TextInput value={inputValue} onChange={handleChange} placeholder={"Entrez votre prénom"} required Icon={<BsPersonCircle className='icon' />}/>
            <PrimaryButton label={"Acceder a votre espace"} Icon={<IoChevronForward className='icon-button'/>}  />
        </LoginFormStyled>
    )
}

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  height: 48vh;
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 40px ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font: "Amatic SC", cursive;

hr{
    border: 1.5px solid ${theme.colors.loginHr} ;
    margin-bottom: 40px;
    width: 300px;
  }

h1{
    color: ${theme.colors.white};
    font-size: 48px;
  }

h2{
    margin: 20px 10px 10px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P4};
  }

&:hover:not(:disabled){
    color: ${theme.colors.primary};
    transition: all 200ms ease-out;
  }

&:disabled{
    opacity: 0.6;
  }

button {
    cursor: pointer;
    transition: 0.8s;
  }

button:hover{
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
  }

.icon{
    font-size: ${theme.fonts.P0};
    margin-right: 8px;
    color: ${theme.colors.greySemiDark};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.P0};
    margin-left: 10px;
    font-size: ${theme.fonts.P0};
    margin-right: 8px;
}

.icon:hover{
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
  }
`;