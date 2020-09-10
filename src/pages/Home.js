import React from 'react'
import styled from 'styled-components'

import HeroText from '../components/HeroText'

// import CoffeeCup from '../components/CoffeeCup'

const HomeContent = styled.div`
  display: flex;
  justify-content: center;
`

const Home = () => {
  return (
    <HomeContent>
      <HeroText />
    </HomeContent>
  )
}
export default Home
