import React from 'react'
import styled from 'styled-components';

export default function menu() {
  return (
    <MenuStyled>
      <div>Menu</div>
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  background: blue;
`;