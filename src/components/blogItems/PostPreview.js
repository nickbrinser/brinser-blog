import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PreviewWrapper = styled.div`
  padding-bottom: 20px;
`
const PostHeaderLink = styled(Link)`
  font-size: 1.75rem;
  color: ${({ theme }) => theme.bodyText};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`
const PostDate = styled.p`
  color: ${({ theme }) => theme.headerText};
  margin-top: 0;
  margin-bottom: 0;
`

const PostPreview = ({ post, link }) => {
  const postDate = new Date(post.created)
  return (
    <PreviewWrapper>
      <PostHeaderLink to={link}>{post.title}</PostHeaderLink>
      <PostDate>{postDate.toLocaleString()}</PostDate>
    </PreviewWrapper>
  )
}

export default PostPreview
