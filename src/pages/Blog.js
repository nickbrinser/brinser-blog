import React, { useState, useEffect } from 'react'
import { firestore } from '../base'
import marked from 'marked'
import ReactHtmlParser from 'react-html-parser'
import styled from 'styled-components'

const Preview = styled.div`
  width: 75vw;
  height: 100vh;
  margin: 2em auto;
  text-align: left;
`

const Blog = () => {
  const [spells, setSpells] = useState([])
  useEffect(() => {
    return firestore.collection('blog-posts').onSnapshot(snapshot => {
      const spellsData = []
      snapshot.forEach(doc =>
        spellsData.push({
          ...doc.data(),
          id: doc.id,
        })
      )
      setSpells(spellsData)
    })
  }, [])

  console.log(spells)
  if (spells.length !== 0) {
    return (
      <Preview>
        <span>{ReactHtmlParser(marked(spells[3].body))}</span>
      </Preview>
    )
  } else return <div />
}

export default Blog
