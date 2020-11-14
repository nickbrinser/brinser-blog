import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    font-weight: lighter;
    color: ${({ theme }) => theme.bodyText};
    transition: color 0.2s ease-out, background 0.2s ease-out;
    display: flex;
    flex-direction: column;
    font-family: "Inter Regular", sans-serif;
    textarea {
      font-family: "Inter Regular", sans-serif;
      color: ${({ theme }) => theme.bodyText};
    }
    button {
    border: none;
    background: ${({ theme }) => theme.headerText};
    border-radius: 35px;
    color: ${({ theme }) => theme.bodyText};
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.accentColor};
    }
  }
  h1 {
    font-size: 2em;
    color: ${({ theme }) => theme.bodyText};
    font-weight: 300;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 1.75em;
    color: ${({ theme }) => theme.bodyText};
    font-weight: 300;
    margin-top: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

}
`
