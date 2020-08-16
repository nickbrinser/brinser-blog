import React from 'react'
import styled from 'styled-components'
import { StyledList } from './LayoutComponent'
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const LeftHandLinks = styled.nav`
  width: 100%;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`
const SocialLink = styled.a`
  color: ${({ theme }) => theme.accentColor};
  text-decoration: none;
`

const SocialLinksBar = ({ theme, toggleTheme }) => {
  return (
    <LeftHandLinks>
      <StyledList>
        <li>
          <SocialLink href="https://github.com/nickbrinser" target="__blank">
            <FaGithub />
          </SocialLink>
        </li>
        <li>
          <SocialLink
            href="https://www.instagram.com/nickbrinser/"
            target="__blank"
          >
            <FaInstagram />
          </SocialLink>
        </li>
        <li>
          <SocialLink href="https://twitter.com/notteennick" target="__blank">
            <FaTwitter />
          </SocialLink>
        </li>
        <li>
          <SocialLink
            href="https://www.linkedin.com/in/nickbrinser/"
            target="__blank"
          >
            <FaLinkedin />
          </SocialLink>
        </li>
      </StyledList>
    </LeftHandLinks>
  )
}

export default SocialLinksBar
