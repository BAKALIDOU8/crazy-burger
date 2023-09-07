import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components';

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
            <br />
            <h2>Connecter-vous</h2>
            <input value={inputValue} onChange={handleChange} type="texte" placeholder="Entrez votre prenom..." required></input>
            <button>Acceder a votre espace</button>
        </LoginFormStyled>
    )
}

const LoginFormStyled = styled.form`
  background: green;
  display: flex;
  flex-direction: columnF;
`;