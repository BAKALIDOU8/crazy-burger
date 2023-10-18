import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../theme';

export default function AdminPanel() {
    return (
        <AdminPanelStyled>AdminPanel</AdminPanelStyled>
    )
}

const AdminPanelStyled = styled.div`
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.greyLight};
    box-shadow: 0px -6px 8px -2px rgba(0,0,0,0.1);
    height: 250px;
`;