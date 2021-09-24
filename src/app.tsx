import { useEffect, useRef, useState } from 'react'
import { Content } from 'components/content'
import Main from 'components/main/main'
import { Sidebar } from 'components/sidebar'
import * as localForage from 'localforage'
import { File } from 'resources/files/types'

function App() {
  const [currentFileId, setCurrentFileId] = useState('')
  const [mkdText, setMkdText] = useState('')

  const [files, setFiles] = useState([])
  const refInputFileName = useRef<HTMLInputElement | null>(null)
  const refEditorTextArea = useRef<HTMLTextAreaElement | null>(null)

  useEffect(() => {
    async function getFilesStorage() {
      const filesStorage = await localForage.getItem<File[]>('markee-app')

      if (typeof filesStorage === 'string') {
        setFiles(JSON.parse(filesStorage))
      }
    }

    getFilesStorage()
  }, [])

  useEffect(() => {
    const fileActive = files.filter((file: File) => file.active === true)

    fileActive.map((file: File) => {
      setCurrentFileId(file.id)
      setMkdText(file.content)
      window.history.replaceState(null, '', `/file/${file.id}`)

      if (refInputFileName.current) {
        refInputFileName.current.value = file.name
      }

      if (refEditorTextArea.current) {
        refEditorTextArea.current.value = file.content
      }

      return null
    })

    console.log('fileActive', fileActive)
  }, [files])

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
