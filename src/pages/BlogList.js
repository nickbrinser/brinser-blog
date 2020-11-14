import React from 'react'
import styled from 'styled-components'

import PostPreview from '../components/blogItems/PostPreview'
import { useBlogList } from '../effects/useBlogList'

const SectionWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const BlogPreviewList = styled.div`
  padding-left: 10px;
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

const Blog = () => {
  const [posts, error] = useBlogList()

  if (!error && posts.length !== 0) {
    return (
      <SectionWrapper>
        <BlogPreviewList>
          <SectionHeading>Blog</SectionHeading>
          {posts.map(post => (
            <PostPreview post={post} key={post.id} link={`/blog/${post.id}`} />
          ))}
        </BlogPreviewList>
      </SectionWrapper>
    )
  } else return <div />
}

export default Blog
