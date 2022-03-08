import React from 'react'
import styled from 'styled-components'


export default function ButtonComp({title, color}) {
  return (
    <Button color={color}>{title}</Button>
  )
}

const Button = styled.button`
    width: 110px;
    height: 30px;
    background-color: ${({color}) => color};
    border: none;
    outline: none;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    transition: all 500ms;
    font-weight: 600;
    font-size: 1.2rem;


    :hover{
      color:  #fff;
      background: transparent;
      border: solid 2px tomato;
    }
`;