import { useRef, useState } from 'react'
import { Content } from 'components/content'
import Main from 'components/main/main'
import { Sidebar } from 'components/sidebar'
import { File } from 'resources/files/types'
import * as FileActions from 'common/file-actions'

function App() {
  const [currentFileId, setCurrentFileId] = useState('')
  const [mkdText, setMkdText] = useState('')
  const [files, setFiles] = useState<File[]>(FileActions.getFileList() ?? '[]')
  const refInputFileName = useRef<HTMLInputElement | null>(null)
  const refEditorTextArea = useRef<HTMLTextAreaElement | null>(null)

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
