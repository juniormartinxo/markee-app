import { useState, RefObject } from 'react'
import { ContentHeaderStyled, InputFileStyled } from './content-header-styled'
import * as Icon from 'ui/icons'
import * as FileActions from 'common/file-actions'
import { File } from 'resources/files/types'
import { useFile } from 'hooks/useFile'

type ContentHeaderProps = {
  refInputFileName: RefObject<HTMLInputElement>
  refEditorTextArea: RefObject<HTMLTextAreaElement>
  currentFileId: string
  files: File[]
  setFiles: Function
}

function ContentHeader({
  refInputFileName,
  refEditorTextArea,
  currentFileId,
  files,
  setFiles,
}: ContentHeaderProps) {
  const { editFiles, saveFiles, onChange } = useFile()
  const [timer, setTimer] = useState(setTimeout(() => {}, 300))

  return (
    <ContentHeaderStyled>
      <Icon.FileActive />
      <InputFileStyled
        ref={refInputFileName}
        onChange={() => {
          clearTimeout(timer)

          setTimer(
            setTimeout(() => {
              editFiles({
                files,
                currentFileId,
                refInputFileName,
                refEditorTextArea,
                setFiles,
              })
            }, 300),
          )

          onChange({
            files,
            currentFileId,
            refInputFileName,
            refEditorTextArea,
            setFiles,
          })
        }}
        onBlur={() => {
          saveFiles({
            files,
            currentFileId,
            refInputFileName,
            refEditorTextArea,
            setFiles,
          })
        }}
        defaultValue="Sem título"
      />
    </ContentHeaderStyled>
  )
}

export { ContentHeader }
