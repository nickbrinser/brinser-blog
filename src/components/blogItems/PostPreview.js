import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import marked from 'marked'

const PreviewWrapper = styled.div`
  padding: 10px;
`
const PostHeaderLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: normal;
  color: ${({ theme }) => theme.headerText};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`
const PostPreviewText = styled.h4`
  margin-top: 0;
  margin-bottom: 0;
`

const PostPreview = ({ post, link }) => {
  const postDate = new Date(post.created * 1000)
  const postPreviewText = marked(post.body)
    .replace(/<[^>]+>/g, '')
    .substr(0, 250)

  return (
    <PreviewWrapper>
      <PostHeaderLink to={link}>{post.title}</PostHeaderLink>
      <PostPreviewText>{postPreviewText}</PostPreviewText>
      <span>{postDate.toLocaleString()}</span>
    </PreviewWrapper>
  )
}

export default PostPreview
