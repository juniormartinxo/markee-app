import { useEffect, useRef, useState } from 'react'
import { Content } from 'components/content'
import Main from 'components/main/main'
import { Sidebar } from 'components/sidebar'
import * as localForage from 'localforage'

function App() {
  const [currentFileId, setCurrentFileId] = useState('')
  const [mkdText, setMkdText] = useState('')

  const [files, setFiles] = useState([])
  const refInputFileName = useRef<HTMLInputElement | null>(null)
  const refEditorTextArea = useRef<HTMLTextAreaElement | null>(null)

  useEffect(() => {
    async function getFiles() {
      const files = await localForage.getItem('markee-app')

      if (typeof files === 'string') {
        setFiles(JSON.parse(files))
      }
    }

    getFiles()
  }, [])

  return (
    <Main>
      <Sidebar
        refInputFileName={refInputFileName}
        refEditorTextArea={refEditorTextArea}
        setCurrentFileId={setCurrentFileId}
        setMkdText={setMkdText}
        setFiles={setFiles}
        files={files}
      />
      <Content
        refInputFileName={refInputFileName}
        refEditorTextArea={refEditorTextArea}
        currentFileId={currentFileId}
        setFiles={setFiles}
        files={files}
        mkdText={mkdText}
        setMkdText={setMkdText}
      />
    </Main>
  )
}

export { App }
