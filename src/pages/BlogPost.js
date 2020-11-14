import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { firestore } from '../base'

import Post from '../components/blogItems/Post'
import PostPreview from '../components/blogItems/PostPreview'

const StyledPost = styled.div`
  display: flex;
  justify-content: center;
`

const BlogPost = ({ match, location }) => {
  const [post, setPost] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    firestore
      .collection('blog-posts')
      .doc(match.params.blogId)
      .get()
      .then(doc => {
        setPost({
          ...doc.data(),
          id: doc.id,
        })
      })
      .catch(error => setError(error))
  }, [])
  return (
    <StyledPost>
      {post && !error && (
        <div>
          <PostPreview post={post} link={`/blog/${post.id}`} />
          <Post rawPost={post} error={error} />
        </div>
      )}
    </StyledPost>
  )
}

export default BlogPost
