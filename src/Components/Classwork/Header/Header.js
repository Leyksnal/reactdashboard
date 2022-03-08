import React from 'react'
import styled from 'styled-components'
import {FaMedapps, FaHouseDamage, FaHospitalSymbol, FaLifeRing, FaMeteor, FaWindows} from 'react-icons/fa'

export default function Header() {
  return (
    <Container>
        <Wrapper>   
            <Logo><FaMedapps size={'2.5rem'}/></Logo>
            <Nav>
                <Navholder>
                    <Icon><FaHouseDamage size={'1.5rem'}/></Icon>
                    <span>Home</span>
                </Navholder>
                <Navholder>
                    <Icon><FaHospitalSymbol size={'1.5rem'}/></Icon>
                    <span>Categories</span>
                </Navholder>
                <Navholder>
                    <Icon><FaLifeRing size={'1.5rem'}/></Icon>
                    <span>Live</span>
                </Navholder>
                <Navholder>
                    <Icon><FaMeteor size={'1.5rem'}/></Icon>
                    <span>About Us</span>
                </Navholder>
            </Nav>
            <Button><FaWindows/> Try Free</Button>
        </Wrapper>
    </Container>
  )
}


const Container = styled.div`
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #123456;
    color: #fff;
`;
const Wrapper = styled.div`
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Logo = styled.div`
    /* width: 20px;
    height: 20px; */
`;
const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    width: 650px;
`;
const Navholder = styled.div`
    display: flex;
    width: max-content;
    align-items: center;
    cursor: pointer;

    span{
        font-size: 1.3rem;
        font-weight: 500;
        margin-left: 10px;
    }
`;
const Icon = styled.div``;

const Button = styled.button`
    width: 140px;
    height: 40px;
    background-color: yellowgreen;
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
      border: solid 2px #fff;
    }
`;