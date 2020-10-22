import React, { useContext } from 'react'
import { auth } from '../../base'
import { AuthContext } from '../../Auth'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { StyledList } from '../LayoutComponent'
import SocialLinksBar from '../SocialLinksBar'

const StyledMenu = styled.nav`
  position: absolute;
  z-index: 20;
  left: 0px;
  top: 0px;
  background: ${({ theme }) => theme.body};
  justify-content: center;
  align-items: center;
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
      <StyledList>
        <StyledListItem>
          <NavLink to="/about" onClick={() => setOpen(false)}>
            about
          </NavLink>
        </StyledListItem>
        <StyledListItem>
          <NavLink to="/blog" onClick={() => setOpen(false)}>
            blog
          </NavLink>
        </StyledListItem>
        <StyledListItem>
          <NavLink to="/portfolio" onClick={() => setOpen(false)}>
            portfolio
          </NavLink>
        </StyledListItem>
        <StyledListItem>
          <SocialLinksBar horizontal handleClick={() => setOpen(false)} />
        </StyledListItem>
        <StyledListItem>
          {currentUser && (
            <button onClick={() => auth.signOut() && setOpen(false)}>
              Sign Out
            </button>
          )}
        </StyledListItem>
      </StyledList>
    </StyledMenu>
  )
}

export default MenuContent
