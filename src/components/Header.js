import React, { useContext } from 'react'
import { auth } from '../base'
import { AuthContext } from '../Auth'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { StyledList } from './LayoutComponent'
import ToggleSwitch from './ToggleSwitch'
import BurgerMenu from './burgerMenu/BurgerMenu'

import Logo from '../assets/Logo'

const StyledNav = styled.nav`
  font-size: 1.25rem;
  padding-bottom: 20px;
  width: 100%;
  display: flex;
  align-items: center;
`
const NavLeft = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
`

const NavCenter = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: center;
`

const NavRight = styled.div`
  flex: 1;
  align-items: center;
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
  const { currentUser } = useContext(AuthContext)
  return (
    <StyledNav>
      <NavLeft>
        {currentUser && (
          <button onClick={() => auth.signOut()}>Sign Out</button>
        )}
        <ToggleSwitch theme={theme} toggleTheme={toggleTheme} />
      </NavLeft>
      <NavCenter>
        <NavLink to="/">
          <Logo />
        </NavLink>
      </NavCenter>
      <NavRight>
        <StyledList horizontal collapse="sm">
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <li>
            <NavLink to="/blog">blog</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">portfolio</NavLink>
          </li>
        </StyledList>
        <StyledList collapse="lg">
          <BurgerMenu />
        </StyledList>
      </NavRight>
    </StyledNav>
  )
}

export default Header
