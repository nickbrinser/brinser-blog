import React, { useState } from 'react'
import styled from 'styled-components'

import { firestore } from '../base'

const InputSection = styled.section`
  padding-top: 5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StyledLabel = styled.label`
  padding: 5px;
`
const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.headerText};
  border: none;
  border-radius: 5px;
  width: 30vw;
  padding: 10px;
  margin-bottom: 15px;
  font-size: 1rem;
  color: ${({ theme }) => theme.bodyText};
`
const StyledTextField = styled.textarea`
  background-color: ${({ theme }) => theme.headerText};
  border: none;
  border-radius: 5px;
  width: 30vw;
  height: 30vh;
  resize: none;
  padding: 10px;
  font-size: 1rem;
  /* white-space: pre-line; */
`

const StyledSubmitButton = styled.button`
  margin-top: 10px;
  padding: 10px;
`

const CreatePost = () => {
  const [postValues, setPostValues] = useState({ title: '', body: '' })

  const onChangeInput = e => {
    setPostValues({ ...postValues, [e.target.name]: e.target.value })
  }

  const onCreate = () => {
    firestore.collection('blog-posts').add(postValues)
  }

  return (
    <InputSection>
      <form>
        <StyledLabel htmlFor="title">Title:</StyledLabel>
        <StyledInput
          autoComplete="off"
          type="text"
          name="title"
          onChange={onChangeInput}
        />
        <StyledLabel htmlFor="body">Body:</StyledLabel>
        <StyledTextField
          autoComplete="off"
          name="body"
          onChange={onChangeInput}
        />
        <StyledSubmitButton type="button" onClick={onCreate}>
          Create Post
        </StyledSubmitButton>
      </form>
    </InputSection>
  )
}

export default CreatePost
