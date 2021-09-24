import { useState, RefObject } from 'react'
import { EditorStyled, TextEditorStyled } from './editor-styled'
import { File } from 'resources/files/types'
import { useFiles } from 'hooks/use-files'

type EditorProps = {
  files: File[]
  currentFileId: string
  setFiles: Function
  setMkdText: Function
  refInputFileName: RefObject<HTMLInputElement>
  refEditorTextArea: RefObject<HTMLTextAreaElement>
}

function Editor({
  files,
  currentFileId,
  setFiles,
  setMkdText,
  refInputFileName,
  refEditorTextArea,
}: EditorProps) {
  const { editFiles, saveFiles, onChange } = useFiles()
  const [timer, setTimer] = useState(setTimeout(() => {}, 300))

  return (
    <EditorStyled>
      <TextEditorStyled
        name=""
        id=""
        placeholder="Digite aqui o seu markdown"
        ref={refEditorTextArea}
        onChange={(e) => {
          setMkdText(e.target.value)

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
      />
    </EditorStyled>
  )
}

export { Editor }
