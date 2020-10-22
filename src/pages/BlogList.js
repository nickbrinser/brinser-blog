import React, { useState, useEffect } from 'react'
import { firestore } from '../base'
import styled from 'styled-components'

import PostPreview from '../components/blogItems/PostPreview'

const BlogPreviewList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 75vw;
  height: 100vh;
  margin: 2em auto;
  text-align: left;
`

const Blog = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    return firestore.collection('blog-posts').onSnapshot(snapshot => {
      const postsData = []
      snapshot.forEach(doc =>
        postsData.push({
          ...doc.data(),
          id: doc.id,
        })
      )
      setPosts(postsData)
    })
  }, [])

  if (posts.length !== 0) {
    return (
      <BlogPreviewList>
        {posts.map(post => (
          <PostPreview post={post} key={post.id} link={`/blog:${post.id}`} />
        ))}
      </BlogPreviewList>
    )
  } else return <div />
}

export default Blog
