import { useState } from "react"

function App() {
  //state (étatn données)
  const [bienvenue, setPrenom] = useState("BK")
  const [count, setCount] = useState(1)

  // comportements
  const handleClick = () => {
    setCount(count + 1)
  }

  //affichage(render (rendu) )
  return (
  <div>
    <h1>Bienvenue chez nous ! </h1>
    <p>{count}</p>
    <button placeholder="Entre votre prénom..." >Acceder a votre espace</button>
  </div> 
  )
}

export default App
