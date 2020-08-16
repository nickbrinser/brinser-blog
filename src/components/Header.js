import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { StyledList } from './LayoutComponent'
import ToggleSwitch from './ToggleSwitch'

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.bodyText};
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.15);
`

const StyledNav = styled.nav`
  width: 100%;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const NameHeading = styled.h2`
  font-weight: lighter;
`
const NavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  margin-right: 20px;
`

const Header = ({ theme, toggleTheme }) => {
  return (
    <StyledHeader>
      <StyledNav>
        <ToggleSwitch theme={theme} toggleTheme={toggleTheme} />
        <NavLink to="/">
          <NameHeading>
            <b>nick</b>brinser.
          </NameHeading>
        </NavLink>
        <StyledList>
          <NavLink to="/about">about</NavLink>
          <NavLink to="/signup">blog</NavLink>
        </StyledList>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
