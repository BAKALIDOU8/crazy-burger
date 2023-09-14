import React from "react"
import { Link, useParams } from "react-router-dom"
import styled from 'styled-components';
import NavBar from "./NavBar";
import Main from "./Main";
import { theme } from "../../../theme";

export default function OrderPage() {
  // state
  const { username } = useParams()

  // comportements

  //render
  return (
    <OrderPageStyled>
      <div className="container">
        <NavBar username={username} />
        <Main />
      </div>
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  height: 107vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background:${theme.colors.primary};

  .container {
    height: 103vh;
    width: 190vh;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    background: #FFFF;
  }

`;
