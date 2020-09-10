import React, { useCallback, useContext } from 'react'
import styled from 'styled-components'
import { withRouter, Redirect } from 'react-router'
import { auth } from '../base'
import { AuthContext } from '../Auth'

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

const Login = ({ history, location }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault()
      const { email, password } = event.target.elements
      try {
        await auth.signInWithEmailAndPassword(email.value, password.value)
        history.push('/')
      } catch (error) {
        alert(error)
      }
    },
    [history]
  )

  const { currentUser } = useContext(AuthContext)
  if (currentUser) {
    return <Redirect to={location.state.from} />
  }
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
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <StyledLabel htmlFor="email">Email:</StyledLabel>
        <StyledInput name="email" type="email" placeholder="email" />

        <StyledLabel htmlFor="password">Password:</StyledLabel>
        <StyledInput name="password" type="password" placeholder="password" />
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}
export default withRouter(Login)
