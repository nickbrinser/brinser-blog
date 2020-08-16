import React from 'react'

import styled from 'styled-components'

const CoffeeContainer = styled.div`
  position: absolute;
`
const CoffeeCupBody = styled.div`
  position: relative;
  width: 100px;
  height: 80px;
  box-sizing: border-box;
  border: 5px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 5px 5px 40px 40px;
  background: none;
  overflow: hidden;

  ::before {
    content: '';
    position: absolute;
    left: -60px;
    width: 200px;
    height: 200px;
    background: ${({ theme }) => theme.accentColor};
    border-radius: 70px;
    animation: loading 10s linear infinite;
  }
  @keyframes loading {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const CoffeeCupHandle = styled.div`
  position: absolute;
  top: 8px;
  left: 95px;
  width: 30px;
  height: 40px;
  background: transparent;
  box-sizing: border-box;
  border: 5px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 0 10px 25px 0;
`

const CoffeeCup = () => {
  return (
    <CoffeeContainer>
      <CoffeeCupBody />
      <CoffeeCupHandle />
    </CoffeeContainer>
  )
}

export default CoffeeCup
