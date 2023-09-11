import React from "react"
import { Link, useParams } from "react-router-dom"
import styled from 'styled-components';

export default function OrderPage() {
  // state
  const { username } = useParams()

  // comportements

  //render
  return ( 
  <OrderPageStyled>
    <div className="container">
      <h1>Bonjour {username} </h1>
        <Link to="/" >
          <button>Déconnexion</button>
        </Link>
    </div>
  </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  background-color: yellow;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background-color: red;
    height: 93vh;
    width: 170vh;
  }
`;
