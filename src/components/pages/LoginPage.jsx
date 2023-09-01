import { useState } from "react"

export default function LoginPage() {
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

    // render 
  return ( <div>
    <h1>Bienvenue chez nous</h1>
    <br />
    <h2>Connecter-vous</h2> 
    <form action="submit" onSubmit={handleSubmit} >
        <input value={inputValue} onChange={handleChange} type="texte" placeholder="Entrez votre prenom..." required></input>
        <button>Acceder a votre espace</button>
    </form>
  </div>)
}

