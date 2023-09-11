import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function NavBar({ username }) {
  return (
    <NavBarStyled>
      <div className="left-side">
        Left
      </div>
      <div className="right-side">
        Right
        <h1>Bonjour {username} </h1>
        <Link to="/" >
        <button>Déconnexion</button>
        </Link>
      </div>
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

  .right-side{
    background: purple;
  }
`;
