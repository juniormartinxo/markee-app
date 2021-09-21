import { useState, RefObject, ChangeEvent } from 'react'
import { EditorStyled, TextEditorStyled } from './editor-styled'
import { File } from 'resources/files/types'
import * as FileActions from 'common/file-actions'

type EditorProps = {
  files: File[]
  currentFileId: string
  setFiles: Function
  setMkdText: Function
  refEditorTextArea: RefObject<HTMLTextAreaElement>
}

function Editor({
  files,
  currentFileId,
  setFiles,
  setMkdText,
  refEditorTextArea,
}: EditorProps) {
  const [timer, setTimer] = useState(setTimeout(() => {}, 300))

  const handleEditFile = () => {
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
      file.content =
        file.id === currentFileId
          ? refEditorTextArea.current?.value ?? file.content
          : file.content

      return file
    })

    setFiles(filesNew)

    FileActions.setFileList(filesNew)
  }

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMkdText(e.target.value)

    const filesNew = files.map((file) => {
      file.active = file.id === currentFileId
      file.status = file.id === currentFileId ? 'editing' : 'saved'
      file.content =
        file.id === currentFileId
          ? refEditorTextArea.current?.value ?? file.content
          : file.content

      return file
    })

    setFiles(filesNew)

    FileActions.setFileList(filesNew)
  }

  return (
    <EditorStyled>
      <TextEditorStyled
        name=""
        id=""
        placeholder="Digite aqui o seu markdown"
        ref={refEditorTextArea}
        onChange={(e) => {
          clearTimeout(timer)
          setTimer(setTimeout(handleEditFile, 300))
          handleChange(e)
        }}
        onBlur={handleSave}
      />
    </EditorStyled>
  )
}

export { Editor }
