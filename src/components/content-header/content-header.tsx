import { useEffect, useState, RefObject } from 'react'
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
  const [timerKey, setTimerKey] = useState(3000)

  const handleKeyUp = () => {
    const filesNew = files.map((file) => {
      file.active = file.id === currentFileId
      file.status = file.id === currentFileId ? 'saving' : 'saved'

      return file
    })

    setFiles(filesNew)

    FileActions.setFileList(filesNew)

    setTimerKey(3000)

    if (timerKey <= 0) {
      setTimeout(() => {
        refInputFileName.current?.blur()
      }, timerKey)
    }
  }

  const handleSave = () => {
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

    setTimerKey(0)
  }

  return (
    <ContentHeaderStyled>
      <Icon.FileActive />
      <InputFileStyled
        ref={refInputFileName}
        onKeyUp={handleKeyUp}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSave()
          }
        }}
        onBlur={handleSave}
      />
    </ContentHeaderStyled>
  )
}

export { ContentHeader }
