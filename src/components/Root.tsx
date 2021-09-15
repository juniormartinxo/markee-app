import { App } from 'app'
import { ThemeProvider } from 'styled-components'
import { theme } from 'resources/theme'

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  )
}

export { Root }
