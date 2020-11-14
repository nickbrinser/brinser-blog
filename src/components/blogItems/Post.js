import React from 'react'
import styled from 'styled-components'
import marked from 'marked'
import ReactHtmlParser from 'react-html-parser'

const StyledPostContainer = styled.section`
  width: 60vw;
  margin-right: 0;
  margin-left: 0;
  border: 1px solid ${({ theme }) => theme.bodyText};
  border-radius: 5px;
  padding: 16px;
`

const Post = ({ rawPost, error }) => {
  return (
    <StyledPostContainer>
      <span>{ReactHtmlParser(marked(rawPost.body))}</span>
    </StyledPostContainer>
  )
}

export default Post
