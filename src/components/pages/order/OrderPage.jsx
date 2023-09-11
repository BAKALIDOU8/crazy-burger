import React from "react"
import { Link, useParams } from "react-router-dom"
import styled from 'styled-components';
import NavBar from "./NavBar";
import Main from "./Main";

export default function OrderPage() {
  // state
  const { username } = useParams()

  // comportements

  //render
  return ( 
  <OrderPageStyled>
    <div className="container">
      <NavBar username={username} />
      <Main/>
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
    display: flex;
    flex-direction: column;
  }

`;
