import { useRef } from 'react'
import { Content } from 'components/content'
import Main from 'components/main/main'
import { Sidebar } from 'components/sidebar'

function App() {
  const refInputFileName = useRef<HTMLInputElement | null>(null)

  return (
    <Main>
      <Sidebar refInputFileName={refInputFileName} />
      <Content refInputFileName={refInputFileName} />
    </Main>
  )
}

export { App }
