import React from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'
import { FaMugHot, FaGlassWhiskey } from 'react-icons/fa'

const ToggleButton = styled.button`
  display: flex;
  justify-content: space-between;
  border: none;
  background: ${({ theme }) => theme.headerText};
  border-radius: 35px;
  overflow: hidden;

  &:hover svg {
    color: ${({ theme }) => theme.accentColor};
  }

  cursor: pointer;
  svg {
    width: 15px;
    height: 15px;
    transition: all 0.2s linear;
    color: ${({ theme }) => theme.bodyText};

    &:first-child {
      transform: ${({ lightTheme }) =>
        lightTheme ? 'translateX(0px)' : 'translateX(150px)'};
    }

    &:nth-child(2) {
      transform: ${({ lightTheme }) =>
        lightTheme ? 'translateX(-150px)' : 'translateX(0px)'};
    }
  }
`

const ToggleSwitch = props => {
  const { theme, toggleTheme } = props
  const isLight = theme === 'light'
  return (
    <ToggleButton lightTheme={isLight} onClick={toggleTheme}>
      <FaMugHot />
      <FaGlassWhiskey />
    </ToggleButton>
  )
}

ToggleSwitch.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}
export default ToggleSwitch
