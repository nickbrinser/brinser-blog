import React, { useContext } from 'react'
import { auth } from '../../base'
import { AuthContext } from '../../Auth'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { StyledList } from '../LayoutComponent'
import SocialLinksBar from '../SocialLinksBar'

const StyledMenu = styled.nav`
  position: absolute;
  padding-top: 25px;
  z-index: 20;
  left: 0px;
  top: 0px;
  background: ${({ theme }) => theme.body};
  justify-content: center;
  align-items: flex-start;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  height: 100vh;
  width: 100vw;
`

const NavLink = styled(Link)`
  font-size: 2rem;
  color: ${({ theme }) => theme.headerText};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`
const StyledListItem = styled.li`
  padding: 10px;
`

const MenuContent = ({ open, setOpen }) => {
  const { currentUser } = useContext(AuthContext)

  return (
    <StyledMenu open={open}>
      <StyledList onClick={() => setOpen(false)}>
        <StyledListItem>
          <NavLink to="/about">about</NavLink>
        </StyledListItem>
        <StyledListItem>
          <NavLink to="/signup">blog</NavLink>
        </StyledListItem>
        <StyledListItem>
          <NavLink to="/portfolio">portfolio</NavLink>
        </StyledListItem>
        <li>
          <SocialLinksBar horizontal />
        </li>
        <li>
          {currentUser && (
            <button onClick={() => auth.signOut()}>Sign Out</button>
          )}
        </li>
      </StyledList>
    </StyledMenu>
  )
}

export default MenuContent
