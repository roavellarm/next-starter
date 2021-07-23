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
    font-size: 16px;
    line-height: 160%;
    background: ${({ theme }) => theme.palette.background};
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  input {
    font-size: 16px;
    line-height: 160%;
    padding: 0.5rem 1rem;
    margin: 0.8rem 0;
    border-radius: 8px;
    border: 1px solid grey;
  }

  button {
    font-size: 16px;
    font-weight: 800;
    border: none;
    border-radius: 8px;
    line-height: 160%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0.8rem;
    margin: 0.8rem 0;
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.palette.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.palette.secondary};
    border-radius: 100px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.palette.primary};
  }
`

export default GlobalStyle
