import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Inconsolata', sans-serif;
  }

  html{
    font-size: 16px;
  }
`

export default GlobalStyle
