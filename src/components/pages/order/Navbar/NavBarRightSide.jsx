import React from 'react'
import styled from 'styled-components';
import Profile from './Profile';
import ToggleButton from '../../../reusable-ui/ToggleButton';





export default function NavBarRightSide({ username }) {
    return (
        <NavBarRightSideStyled>
            <ToggleButton 
                labelIfUnchecked='ACTIVER LE MODE ADMIN' 
                labelIfChecked='DESACTIVER LE MODE ADMIN' 
            />
            <Profile username={username} />
        </NavBarRightSideStyled>
    )
}

const NavBarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;
     
`;