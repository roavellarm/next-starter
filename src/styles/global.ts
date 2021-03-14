import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    background: ${({ theme }) => theme.palette.background};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

`

export default GlobalStyle
