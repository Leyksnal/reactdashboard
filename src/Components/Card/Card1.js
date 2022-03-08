import React from 'react'
import styled from 'styled-components'


export default function Card1({username, pic, icon, title, count, result, color, col, bg}) {
  return (
      <Container color={color}>
        <Icon>
          <Img bg={bg} src={pic}/>
          <p>{username}</p>
        </Icon>
        <h1>{count}</h1>
        <h3>{title}</h3>
        <Icon2>
          <Img2 src={icon}/>
          <Day col={col}>{result}</Day>
        </Icon2>
      </Container>
  )
}

const Container = styled.div`
  background-color: #bfccd4;
  margin-top: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 4px solid ${({color}) => color};
  border-radius: 8px;

  h1{
    font-size: 3.5rem;
    margin-top: -0px;
  }
  h3{
    text-transform: uppercase;
    margin-top: -35px;
    font-weight: 400;
    letter-spacing: 5px;
    font-size: 1rem;
  }
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  background-color: ${({bg}) => bg};
`;

const Img2 = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  width: 110px;
  height: 20px;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 10px;

  p{
    font-weight: 500;
  }
`;

const Icon2 = styled.div`
  display: flex;
  align-items: center;
  width: 95px;
  height: 20px;
  justify-content: space-between;
  margin-bottom: 40px;
`;


const Day = styled.p`
  color: ${({col}) => col};
`;