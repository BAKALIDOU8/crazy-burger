import React from 'react'
import styled from 'styled-components';

export default function Main() {
    return (
        <MainStyled>
            <p>main</p>
        </MainStyled>
    )
}

const MainStyled = styled.div`
    flex: 1;
`;
