import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import {IoChevronForward} from "react-icons/io5"
import {BsPersonCircle} from "react-icons/bs"
import Input from './Input';



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
            <Input value={inputValue} onChange={handleChange} placeholder={"Entrez votre prénom"} required Icon={<BsPersonCircle className='icon' />}/>
            <button className="button-with-icon">                
               <span>Acceder a votre espace</span>
               <IoChevronForward className='icon' /> 
            </button>
            
        </LoginFormStyled>
    )
}

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;

  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font: "Amatic SC", cursive;

  hr{
    border: 1.5px solid #F56A2C;
    margin-bottom: 40px;
    width: 300px;
  }

  h1{
    color: white;
    font-size: 48px;
  }

  h2{
    color: #8E8B8B;
    margin: 20px 10px 10px;
    color: white;
    font-size: 36px;
  }

  .button-with-icon{
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;

    padding: 18px 24px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 800;
    color: white;
    background-color: #FF9F1B;
    border: 1px solid #FF9F1B;
  }

  &:hover:not(:disabled){
    color: #FF9F1B;
    transition: all 200ms ease-out;
  }

  &:disabled{
    opacity: 0.6;
  }

  .icon{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    margin-left: 10px;
  }

  button {
    cursor: pointer;
    transition: 0.8s;
  }

  button:hover{
    background-color: white;
    color: #FF9F1B;
  }
`;