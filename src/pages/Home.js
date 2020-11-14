import React from 'react'
import styled from 'styled-components'

import HeroText from '../components/HeroText'
import BlogSectionHome from '../components/blogItems/BlogSectionHome'

// import CoffeeCup from '../components/CoffeeCup'

const HomeContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Home = () => {
  return (
    <HomeContent>
      <HeroText />
      <BlogSectionHome />
    </HomeContent>
  )
}
export default Home
