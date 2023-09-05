import React from 'react'
import { Link } from 'react-router-dom'

export default function Erreurpage() {
  return ( 
    <div>
      <h1>ErreurPage</h1>
      <Link to="/" >
        <button>Retourner vers la page d'acceuil</button>
      </Link>
    </div>
    )
}
