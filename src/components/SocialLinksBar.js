import React from 'react'
import styled from 'styled-components'
import { StyledList } from './LayoutComponent'
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const LeftHandLinks = styled.nav`
  font-size: 2rem;
  /* padding: 6rem 0 0 2rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: ${({ absolute }) => absolute && 'absolute'};
`
const SocialLink = styled.a`
  text-decoration: none;
`
const GithubIcon = styled(FaGithub)`
  color: ${({ theme }) => theme.linkColor};
  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`
const InstagramIcon = styled(FaInstagram)`
  color: ${({ theme }) => theme.linkColor};
  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`
const TwitterIcon = styled(FaTwitter)`
  color: ${({ theme }) => theme.linkColor};
  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`
const LinkedinIcon = styled(FaLinkedin)`
  color: ${({ theme }) => theme.linkColor};
  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`

const SocialLinksBar = ({
  theme,
  toggleTheme,
  horizontal,
  absolute,
  handleClick,
}) => {
  return (
    <LeftHandLinks>
      <StyledList horizontal={horizontal}>
        <li onClick={handleClick}>
          <SocialLink href="https://github.com/nickbrinser" target="__blank">
            <GithubIcon />
          </SocialLink>
        </li>
        <li onClick={handleClick}>
          <SocialLink
            href="https://www.instagram.com/nickbrinser/"
            target="__blank"
          >
            <InstagramIcon />
          </SocialLink>
        </li>
        <li onClick={handleClick}>
          <SocialLink href="https://twitter.com/notteennick" target="__blank">
            <TwitterIcon />
          </SocialLink>
        </li>
        <li onClick={handleClick}>
          <SocialLink
            href="https://www.linkedin.com/in/nickbrinser/"
            target="__blank"
          >
            <LinkedinIcon />
          </SocialLink>
        </li>
      </StyledList>
    </LeftHandLinks>
  )
}

export default SocialLinksBar
