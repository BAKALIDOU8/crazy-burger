import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export default function NavBarRightSide({username}) {
    return (
        <NavBarRightSideStyled>
            <h1>Bonjour {username} </h1>
            <Link to="/" >
                <button>Déconnexion</button>
            </Link>
        </NavBarRightSideStyled>
    )
}

const NavBarRightSideStyled = styled.div`
    
`;