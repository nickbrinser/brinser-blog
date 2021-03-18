import React from 'react'
import styled from 'styled-components'

const StyledHeroSection = styled.section`
  height: 25vh;
  width: 50vw;
  display: flex;
  border: 1px solid ${({ theme }) => theme.bodyText};
  box-shadow: 5px 5px 0 ${({ theme }) => theme.bodyText};
  border-radius: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.linkColor};
  margin-bottom: 45px;
`

const HeroText = () => {
  return (
    <StyledHeroSection>
      <div>
        <h1>Hello, I'm Nick Brinser.</h1>
        <h2>Husband, Developer, and Coffee Nerd.</h2>
      </div>
    </StyledHeroSection>
  )
}

export default HeroText
