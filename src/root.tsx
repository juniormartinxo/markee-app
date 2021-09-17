import { App } from 'app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'resources/global-style'
import { theme } from 'resources/theme'

import 'normalize.css'

function Root () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
}

export { Root }
