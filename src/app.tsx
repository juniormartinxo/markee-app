import { useEffect, useRef, useState } from 'react'
import { Content } from 'components/content'
import Main from 'components/main/main'
import { Sidebar } from 'components/sidebar'
import { File } from 'resources/files/types'
import * as FileActions from 'common/file-actions'

function App() {
  const [currentFileId, setCurrentFileId] = useState('')
  const [files, setFiles] = useState<File[]>(
    JSON.parse(FileActions.getFileList() ?? '[]'),
  )
  const refInputFileName = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    const timerEditing = setTimeout(() => {
      refInputFileName.current?.blur()
    }, 3000)
    return () => {
      clearTimeout(timerEditing)
    }
  }, [files])

  return (
    <Main>
      <Sidebar
        refInputFileName={refInputFileName}
        setCurrentFileId={setCurrentFileId}
        setFiles={setFiles}
        files={files}
      />
      <Content
        refInputFileName={refInputFileName}
        currentFileId={currentFileId}
        setFiles={setFiles}
        files={files}
      />
    </Main>
  )
}

export { App }
