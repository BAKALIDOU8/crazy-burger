import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import {BsPersonCircle} from "react-icons/bs"


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
            <div className="input-with-icon">
                <BsPersonCircle className='icon' />
                <input value={inputValue} onChange={handleChange} type="texte" placeholder="Entrez votre prenom..." required></input>
            </div>
            <button>Acceder a votre espace</button>
        </LoginFormStyled>
    )
}

const LoginFormStyled = styled.form`
  background: green;
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

  h1{
    color: #8E8B8B;
    margin: 20px 10px 10px;
    color: white;
    font-size: 36px;
  }

  .input-with-icon{
    background-color: #FFF;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;
    
    .icon{
        font-size: 15px;
        margin-right: 8px;
        color: #93A2B1;
    }

    input{
        border: none;
        font-size: 15px;
        color: #17161A;
    }

    &::placeholder{
        background: white;
        color: lightgrey;
        
    }
  }



`;