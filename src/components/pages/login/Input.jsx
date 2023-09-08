import React from 'react'
import styled from 'styled-components';

export default function Input({ value , onChange , Icon , ...restProps }) {
  return (
    <InputStyled>
    {Icon && Icon}
        <input 
            value={value} 
            onChange={onChange} 
            type="texte" 
            {...restProps}
        />                
    </InputStyled>
  )
}

const InputStyled = styled.div`
    background-color: #FFF;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;
    
    .icon{
        font-size: 15px;
        margin-right: 8px;
        color: #93A2B1;
    }

    input{
        border: none;
        font-size: 15px;
        color: #17161A;
    }

    &::placeholder{
        background: white;
        color: lightgrey;
    }

`

