import { ThemeProvider, createGlobalStyle } from 'styled-components'

import { theme } from './theme'

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    scroll-behavior: smooth;
    background-color: white;
  }

  *::-webkit-scrollbar{
    width:0.3rem;
    background-color: #ddd;
  }

  *::-webkit-scrollbar-thumb{
    background-color: #444;
  }

  #__next {
    overflow-x: hidden;
    position: relative;
  }

  html {
    font-size: 62.5%;
    @media (max-width: 1279px) {
      font-size: 50%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const Theme = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  )
}

export default Theme
