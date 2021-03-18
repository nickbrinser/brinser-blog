import React, { useCallback } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import { signIn, useAuth } from '../Auth'
import * as RD from '@devexperts/remote-data-ts'
import * as O from 'fp-ts/Option'
import { pipe } from 'fp-ts/lib/function'

const StyledLabel = styled.label`
  padding: 5px;
`
const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.headerText};
  border: none;
  border-radius: 5px;

  padding: 10px;
  margin-bottom: 15px;
  font-size: 1rem;
  color: ${({ theme }) => theme.bodyText};
`

const Login = () => {
  const currentUser = useAuth()

  const handleLogin = useCallback(async event => {
    event.preventDefault()
    const { email, password } = event.target.elements
    try {
      await signIn(email.value, password.value)
    } catch (error) {
      alert(error)
    }
  }, [])
  const renderLogin = () => (
    <>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <StyledLabel htmlFor="email">Email:</StyledLabel>
        <StyledInput name="email" type="email" placeholder="email" />

        <StyledLabel htmlFor="password">Password:</StyledLabel>
        <StyledInput name="password" type="password" placeholder="password" />
        <button type="submit">Log in</button>
      </form>
    </>
  )
  // TODO: change these styles to Styled Component
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {pipe(
        currentUser,
        RD.fold(
          () => null,
          () => <p>Loading</p>,
          () => <p>There is an error with authentication.</p>,
          user =>
            pipe(
              user,
              O.fold(renderLogin, () => <Redirect to="/" />)
            )
        )
      )}
    </div>
  )
}
export default Login
