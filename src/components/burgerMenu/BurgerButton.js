import React from 'react'
import styled from 'styled-components'

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 30;

  &:focus {
    outline: none;
  }

  &:hover div {
    background: ${({ theme }) => theme.accentColor};
  }

  div {
    width: 1.5rem;
    height: 2px;
    background: ${({ open, theme }) => theme.headerText};
    border-radius: 10px;
    transition: all 0.2s linear;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) =>
        open ? 'translateX(-20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`

const BurgerButton = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(value => !value)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default BurgerButton
