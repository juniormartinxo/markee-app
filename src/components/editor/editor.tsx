import { RefObject, ChangeEvent } from 'react'
import { EditorStyled, TextEditorStyled } from './editor-styled'
import { File } from 'resources/files/types'
import * as FileActions from 'common/file-actions'

type EditorProps = {
  setMkdText: Function
  currentFileId: string
  files: File[]
  setFiles: Function
  refInputFileName: RefObject<HTMLInputElement>
}

function Editor({
  setMkdText,
  currentFileId,
  files,
  setFiles,
  refInputFileName,
}: EditorProps) {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMkdText(e.target.value)

    const filesNew = files.map((file) => {
      file.active = file.id === currentFileId
      file.status = file.id === currentFileId ? 'saving' : 'saved'

      return file
    })

    setFiles(filesNew)

    FileActions.setFileList(filesNew)

    setTimeout(() => {
      handleSave()
    }, 300)
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
  }

  return (
    <EditorStyled>
      <TextEditorStyled
        name=""
        id=""
        placeholder="Digite aqui o seu markdown"
        onChange={handleChange}
      />
    </EditorStyled>
  )
}

export { Editor }
