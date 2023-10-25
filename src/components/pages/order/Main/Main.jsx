import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../theme';
import Menu from './menu';
import Admin from './Admin/Admin';
import { useContext } from 'react';
import OrderContext from "../../../../context/OrderContext"

export default function Main() {

    const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext)


    return (
        <MainStyled>
            {/* <div className="basket">Baskets</div> */}
            <div className="menu-and-admin">
                <Menu />
                {isModeAdmin && <Admin/> }
            </div>
        </MainStyled>
    )
}

const MainStyled = styled.div`
    flex: 1;
    background: ${theme.colors.white};
    height: calc(95vh - 10vh);
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
    display: grid;
    grid-template-columns: 1fr ;
    
    //grid-template-columns: 25% 1fr ;
    
    /* .basket{
        background: yellow;
    } */

    .menu-and-admin{
        position: relative;
        overflow-y: hidden;
        display: grid;
        border-bottom-left-radius: ${theme.borderRadius.extraRound};
        border-bottom-right-radius: ${theme.borderRadius.extraRound};


    }



    `
