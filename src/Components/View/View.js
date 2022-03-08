import React from 'react'
import Card1 from '../Card/Card1'
import styled from 'styled-components'
import fb from '../img/facebook.svg'
import yt from '../img/youtube.svg'
import tw from '../img/twitter.svg'
import down from '../img/down.svg'
import insta from '../img/instagram.svg'
import up from '../img/up.svg'

export default function View() {
  return (
    <Div>
        <Card1 username={'@akim_leke'} bg='#fff' pic={fb} icon={up} count='1981' title='followers' result='39 Today' color='#fd482d' col='#27C99F'/>
        <Card1 username={'@keke_345'} pic={yt} icon={up} count='23K' title='followers' result='329 Today' color='#c73f8d' col='#27C99F'/>
        <Card1 username={'@pheonix'} pic={insta} icon={up} count='5099' title='followers' result='919 Today' color='#35fd2d' col='#27C99F'/>
        <Card1 username={'@lukaku'} pic={tw} icon={down} count='3.4M' title='followers' result='11 Today' color='#27C99F' col='red'/>
    </Div>
  )
}

const Div = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;