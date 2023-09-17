import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Profile from './Profile';


export default function NavBarRightSide({ username }) {
    return (
        <NavBarRightSideStyled>
            {/* <div className="admin-button">Admin Button</div> */}
            <Profile username={username} />
        </NavBarRightSideStyled>
    )
}

const NavBarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;
    
    /*.admin-button{
        background: lightblue;
    }*/

    
`;