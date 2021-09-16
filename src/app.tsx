import { Content } from 'components/content'
import Main from 'components/main/main'
import { Sidebar } from 'components/sidebar'

function App() {
  return (
    <Main>
      <Sidebar />
      <Content>Content</Content>
    </Main>
  )
}

export { App }