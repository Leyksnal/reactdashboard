import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return (
        <Container>
            <Text>
                <h2>Social Medial Dashboard</h2>
                <h3>Total Followers 32,900</h3>
            </Text>
            <Action>
                {/* <h3>Dark mode</h3>
                <h3>Switch</h3> */}
            </Action>
        </Container>
  )
}


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100px;
    width: 80%;
    align-items: center;
`;
const Text = styled.div`
    h2{
        font-size: 2.5rem;
    }
    h3{
        margin-top: -30px;
    }
`;
const Action = styled.div`
    display: flex;
`;