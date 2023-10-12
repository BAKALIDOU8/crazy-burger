import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import { fakeMenu1, fakeMenu2 } from '../../../../fakeData/fakeMenu'
import { theme } from '../../../../theme';
import Products from './Products';

export default function Menu() {

  const [menu, setMenu] = useState(fakeMenu2)

  return ( <MenuStyled className='menu' >
      {menu.map((produit) => {
        return  <Products title={produit.title} imageSource={produit.imageSource} price={produit.price} />
      })}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px ;
  padding: 50px 50px 150px;
  justify-items: center;

`;