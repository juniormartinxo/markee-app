import { RefObject } from 'react'
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
  const handleKeyDown = () => {
    const filesNew = files.map((file) => {
      file.active = file.id === currentFileId
      file.status = file.id === currentFileId ? 'saving' : 'saved'

      return file
    })

    setFiles(filesNew)

    FileActions.setFileList(filesNew)
  }

  const handleKeyUp = () => {
    const filesNew = files.map((file) => {
      file.active = file.id === currentFileId
      file.status = file.id === currentFileId ? 'editing' : 'saved'

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
        onKeyDown={handleKeyDown}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleKeyUp()
          }
        }}
        onBlur={handleKeyUp}
      />
    </ContentHeaderStyled>
  )
}

export { ContentHeader }
