import React from 'react'
import styled from 'styled-components'

const StyledHeroSection = styled.section`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Greeting = styled.h1`
  font-size: 3rem;
`

const HeroText = () => {
  return (
    <StyledHeroSection>
      <div>
        <Greeting>THE</Greeting>
      </div>
    </StyledHeroSection>
  )
}

export default HeroText
