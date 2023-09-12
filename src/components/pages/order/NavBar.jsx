import React from 'react'
import styled from 'styled-components';
import NavBarRightSide from './NavBarRightSide';
import Logo from '../../reusable-ui/Logo'
import { theme } from '../../../theme';

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
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  margin-top: 3px;
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  

  .left-side{
    
  }


`;
