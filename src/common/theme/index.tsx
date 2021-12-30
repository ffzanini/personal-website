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

  a {
    text-decoration: none;
  }
`

export const Theme = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
)
