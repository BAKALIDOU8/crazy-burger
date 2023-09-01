import React, { useState } from 'react'

export default function LoginForm() {
    // state
    const [inputValue, setInputValue] = useState("")

    // comportement
    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Bonjour ${inputValue}`)
        setInputValue("")
    }
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }
    
    //render
    return (
        <form action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous</h1>
            <br />
            <h2>Connecter-vous</h2>
            <input value={inputValue} onChange={handleChange} type="texte" placeholder="Entrez votre prenom..." required></input>
            <button>Acceder a votre espace</button>
        </form>
    )
}
