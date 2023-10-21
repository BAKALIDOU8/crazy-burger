import React from 'react'
import styled from 'styled-components';
import { theme } from '../../theme'


export default function Tab({Icon, onClick, className}) {
  return (
    <TabStyled onClick={onClick} className={className}>
        <div className='icon'>{Icon}</div>       
    </TabStyled>
  )
}

const TabStyled = styled.button`
    height: 43px;
    padding: 0 22px;

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    left: 5%;
    top: 1px;

    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.greySemiDark};
    background: ${theme.colors.white};

    border-width: 1px 1px 2px 1px;
    border-style: solid;
    border-color: ${theme.colors.greyLight};
    box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);
    border-radius: ${theme.borderRadius.round};
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0px;

    :hover{
        border-bottom: 2px solid white;
    }

    .icon{
        display: flex;
    }

`;
