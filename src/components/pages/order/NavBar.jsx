import React from 'react'
import styled from 'styled-components';
import NavBarRightSide from './NavBarRightSide';
import Logo from '../../reusable-ui/Logo'

export default function NavBar() {
  return (
    <NavBarStyled>      
      <div className="left-side">
        <Logo/>
      </div>
    <NavBarRightSide username={"username"} />
    </NavBarStyled>
  )
}

const NavBarStyled = styled.nav`
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;

  .left-side{
    
  }


`;
