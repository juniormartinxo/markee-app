import { useState, RefObject } from 'react'
import { ContentHeaderStyled, InputFileStyled } from './content-header-styled'
import * as Icon from 'ui/icons'
import * as FileActions from 'common/file-actions'
import { File } from 'resources/files/types'
import { useFile } from 'hooks/useFile'

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
  const { editFiles, saveFiles } = useFile()
  const [timer, setTimer] = useState(setTimeout(() => {}, 300))

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

          setTimer(
            setTimeout(() => {
              editFiles({ files, currentFileId, refInputFileName, setFiles })
            }, 300),
          )

          handleChange()
        }}
        onBlur={() => {
          saveFiles({ files, currentFileId, refInputFileName, setFiles })
        }}
        defaultValue="Sem título"
      />
    </ContentHeaderStyled>
  )
}

export { ContentHeader }
