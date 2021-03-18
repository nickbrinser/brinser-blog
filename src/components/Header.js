import React from 'react'
import { auth } from '../base'
import { useAuth } from '../Auth'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as RD from '@devexperts/remote-data-ts'
import * as O from 'fp-ts/Option'
import { pipe } from 'fp-ts/lib/function'

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
  display: grid;
  grid-gap: 2px;
  grid-template-columns: 2fr 5fr 2fr;
  grid-template-areas: 'controls logo links';
`
const NavLeft = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  grid-area: controls;
`

const NavCenter = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  grid-area: logo;
`

const NavRight = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  grid-area: links;
`

const NavLink = styled(Link)`
  color: inherit;

  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`

const Header = ({ theme, toggleTheme }) => {
  const currentUser = useAuth()
  return (
    <StyledNav>
      <NavLeft>
        {pipe(
          currentUser,
          RD.fold(
            () => null,
            () => null,
            () => null,
            user =>
              pipe(
                user,
                O.fold(
                  () => <></>,
                  () => <button onClick={() => auth.signOut()}>Sign Out</button>
                )
              )
          )
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
