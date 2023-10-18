import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../theme';

export default function Admin() {
    return (
        <AdminStyled>
            Admin
        </AdminStyled>
    )
}

const AdminStyled = styled.div`
        background: red;
        position: absolute;
        height: 250px;
        bottom: 0;
        left: 0;
        right: 0;
        background: ${theme.colors.white};
        border: 1px solid ${theme.colors.greyLight};
        box-shadow: 0px -6px 8px -2px rgba(0,0,0,0.1);
`;
