import React from 'react'
import styled from 'styled-components';

export default function TextInput({ value , onChange , Icon , ...restProps }) {
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

