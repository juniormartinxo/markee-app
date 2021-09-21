import { useState, RefObject } from 'react'
import { ContentHeaderStyled, InputFileStyled } from './content-header-styled'
import * as Icon from 'ui/icons'
import * as FileActions from 'common/file-actions'
import { File } from 'resources/files/types'

type ContentHeaderProps = {
  refInputFileName: RefObject<HTMLInputElement>
  currentFileId: string
  files: File[]
  setFiles: Function
}

function ContentHeader({
  refInputFileName,
  currentFileId,
  files,
  setFiles,
}: ContentHeaderProps) {
  const [timer, setTimer] = useState(setTimeout(() => {}, 300))

  const handleKeyUp = () => {
    const filesNew = files.map((file) => {
      file.active = file.id === currentFileId
      file.status = file.id === currentFileId ? 'saving' : 'saved'

      return file
    })

    setFiles(filesNew)

    FileActions.setFileList(filesNew)

    setTimeout(handleSave, 300)
  }

  const handleSave = () => {
    const filesNew = files.map((file) => {
      file.active = file.id === currentFileId
      file.status = file.id === currentFileId ? 'saved' : 'saved'
      file.name =
        file.id === currentFileId
          ? refInputFileName.current?.value ?? file.name
          : file.name

      return file
    })

    setFiles(filesNew)

    FileActions.setFileList(filesNew)
  }

  const handleChange = () => {
    const filesNew = files.map((file) => {
      file.active = file.id === currentFileId
      file.status = file.id === currentFileId ? 'editing' : 'saved'
      file.name =
        file.id === currentFileId
          ? refInputFileName.current?.value ?? file.name
          : file.name

      return file
    })

    setFiles(filesNew)

    FileActions.setFileList(filesNew)
  }

  return (
    <ContentHeaderStyled>
      <Icon.FileActive />
      <InputFileStyled
        ref={refInputFileName}
        onChange={() => {
          clearTimeout(timer)
          setTimer(setTimeout(handleKeyUp, 300))
          handleChange()
        }}
        onBlur={handleSave}
        autoFocus
      />
    </ContentHeaderStyled>
  )
}

export { ContentHeader }
