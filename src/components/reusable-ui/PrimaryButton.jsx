import React from 'react'
import styled from 'styled-components';

export default function PrimaryButton({label, Icon}) {
  return (
    <PrimaryButtonStyled >                
    <span>{label}</span>
    {Icon && Icon}
    </PrimaryButtonStyled>     
  )
}

const PrimaryButtonStyled  = styled.button`
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;

    padding: 18px 24px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 800;
    color: white;
    background-color: #FF9F1B;
    border: 1px solid #FF9F1B;
  
`;

