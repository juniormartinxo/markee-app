import { App } from 'app'
import { ThemeProvider } from 'styled-components'
import { theme } from 'resources/themes'

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  )
}

export { Root }
