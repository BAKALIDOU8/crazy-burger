import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../theme';
import Menu from './menu';

export default function Main() {
    return (
        <MainStyled>
            {/* <div className="basket">Baskets</div> */}
            <Menu/>
            
        </MainStyled>
    )
}

const MainStyled = styled.div`
    flex: 1;
    /* background: ${theme.colors.white}; */
    background: red;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
    display: grid;
    grid-template-columns: 1fr ;
    //CSS FOR BASKET
    //grid-template-columns: 25% 1fr ;
    
    /* .basket{
        background: yellow;
    } */

   

    `
