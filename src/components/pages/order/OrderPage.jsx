import React from "react"
import styled from 'styled-components';
import NavBar from "./Navbar/NavBar";
import Main from "./Main/Main";
import { theme } from "../../../theme";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext";

export default function OrderPage() {
  // state
  const [isModeAdmin, setIsModeAdmin] = useState(false)
  

  // comportements

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin
  }

  //render
  return (
    <OrderContext.Provider value={orderContextValue} >
      <OrderPageStyled>
        <div className="container">
          <NavBar/>
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>

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
