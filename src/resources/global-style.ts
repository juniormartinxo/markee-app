import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Inconsolata', sans-serif;
  }

  html{
    font-size: 62.5%;
  }
`

export default GlobalStyle
