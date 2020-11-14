import { useState, useEffect } from 'react'
import { firestore } from '../base'

export function useBlogList(limit) {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState()
  useEffect(() => {
    firestore
      .collection('blog-posts')
      .orderBy('created', 'desc')
      .limit(limit ? limit : 15)
      .get()
      .then(response => {
        const postsData = []
        response.forEach(doc =>
          postsData.push({
            ...doc.data(),
            id: doc.id,
          })
        )
        setPosts(postsData)
      })
      .catch(error => setError(error))
  }, [])
  return [posts, error]
}
