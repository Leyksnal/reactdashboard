import React from 'react'
import styled from 'styled-components'
import Card2 from './Components/Card/Card2'
import Header from './Components/Header/Header'
import View from './Components/View/View'
import fb from './Components/img/facebook.svg'
import yt from './Components/img/youtube.svg'
import tw from './Components/img/twitter.svg'
import down from './Components/img/down.svg'
import insta from './Components/img/instagram.svg'
import up from './Components/img/up.svg'

export default function App() {
  return (
    <div>
      <Div>
        <Header/>
        <View/>
        <Middle>
          <h2>Overview - Today</h2>
        </Middle>
        <Down>
          <Card2 title='Page Views' bg='#fff' pic={fb} icon={up} rate='85%' count='570'/>
          <Card2 title='Views' color='red' pic={yt} icon={down} rate='24%' count='14'/>
          <Card2 title='Likes' icon={up} pic={tw} rate='75%' count='600'/>
          <Card2 title='Likes' icon={up} bg='#fff' pic={fb} rate='65%' count='9451'/>
        </Down>
        <Down2>
          <Card2 title='Likes' icon={up} pic={insta} rate='92%' count='2211'/>
          <Card2 title='Subscribers' icon={up} pic={yt} rate='75%' count='4351'/>
          <Card2 title='Retweet' color='red' icon={down} pic={tw} rate='15%' count='21'/>
          <Card2 title='Profile Viewers' icon={down} pic={insta} rate='5%' count='12' color='red'/>
        </Down2>
      </Div>
    </div>
  )
}

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Up = styled.div`
  display: flex;
  width: 80%;
`;

const Down = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 40px;
`;

const Down2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 90px;
`;

const Middle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  h2{
    font-size: 2rem;
    margin-left: -675px;
    color: #2f3847;
  }
`;