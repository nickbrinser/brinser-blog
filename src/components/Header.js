import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { StyledList } from './LayoutComponent'
import ToggleSwitch from './ToggleSwitch'
import Logo from '../assets/Logo'

const StyledNav = styled.nav`
  font-size: 24px;
  width: 100%;
  display: flex;

  align-items: center;
`
const NavLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

const NavCenter = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

const NavRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

const NavLink = styled(Link)`
  color: inherit;

  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`
const Header = ({ theme, toggleTheme }) => {
  return (
    <StyledNav>
      <NavLeft>
        <ToggleSwitch theme={theme} toggleTheme={toggleTheme} />
      </NavLeft>
      <NavCenter>
        <NavLink to="/">
          <Logo />
        </NavLink>
      </NavCenter>
      <NavRight>
        <StyledList horizontal>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <li>
            <NavLink to="/signup">blog</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">portfolio</NavLink>
          </li>
        </StyledList>
      </NavRight>
    </StyledNav>
  )
}

export default Header
