import React from 'react'
import styled from 'styled-components'

import PostPreview from './PostPreview'
import { useBlogList } from '../../effects/useBlogList'

const StyledBlogSection = styled.section`
  padding-left: 10px;
  margin-top: 50px;
  height: 25vh;
  width: 45vw;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
const SectionHeading = styled.h2`
  font-weight: normal;
  font-size: 1rem
  margin-bottom: 8px;
`

const BlogSectionHome = () => {
  const [posts, error] = useBlogList()
  if (!error && posts.length !== 0) {
    return (
      <StyledBlogSection>
        <SectionHeading>Blog</SectionHeading>
        {posts.map(post => (
          <PostPreview post={post} key={post.id} link={`/blog/${post.id}`} />
        ))}
      </StyledBlogSection>
    )
  } else return <div />
}

export default BlogSectionHome
