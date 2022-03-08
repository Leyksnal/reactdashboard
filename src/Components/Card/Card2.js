import React from 'react'
import styled from 'styled-components'

export default function Card2({title, icon, pic, rate, count}) {
  return (
    <Container>
        <Wrapper>
            <Up>
                <h3>{title}</h3>
                <img src={pic} alt="" />
            </Up>
            <Down>
                <h2>{count}</h2>
                <Icon>
                    <img src={icon} alt="" />
                    <span>{rate}</span>
                </Icon>
            </Down>
        </Wrapper>
    </Container>
  )
}


const Container = styled.div`
    background-color: #bfccd4;
    width: 300px;
    display: flex;
    justify-content: center;
    border-radius: 8px;
    align-items: center;
    margin-top: -50px;

`;
const Wrapper = styled.div`
    

`;
const Up = styled.div`
    display: flex;
    justify-content: space-between;
    width: 260px;
    align-items: center;
    img{
        width: 25px;
        height: 25px;
    }
    h3{
        color:  #2f3847;
    }
`;
const Down = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -40px;
    h2{
        font-size: 2.5rem;
    }
`;
const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    img{
            width: 18px;
            height: 18px;
            object-fit: contain;
            margin-right: 8px;
    }
    span{
        color: #27C99F;
    }
`;