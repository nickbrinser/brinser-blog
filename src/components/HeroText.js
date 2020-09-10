import React from 'react'
import styled from 'styled-components'

const StyledHeroSection = styled.section`
  padding-top: 2rem;
  height: 25vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HeroText = () => {
  return (
    <StyledHeroSection>
      <h1>Hello, I'm Nick Brinser.</h1>
      <h2>Husband, Developer, and Coffee Nerd.</h2>
    </StyledHeroSection>
  )
}

export default HeroText
