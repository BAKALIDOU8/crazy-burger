import React from 'react'
import styled from 'styled-components';
import NavBarRightSide from './NavBarRightSide';

export default function NavBar() {
  return (
    <NavBarStyled>
      <div className="left-side">
        Left
      </div>
    <NavBarRightSide username={"username"} />
    </NavBarStyled>
  )
}

const NavBarStyled = styled.nav`
  background: red;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-side{
    background: pink;
  }


`;
