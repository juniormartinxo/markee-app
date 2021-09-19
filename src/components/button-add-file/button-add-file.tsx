import ButtonAddFileStyle from './button-add-file-styled'
import { File } from 'resources/files/types'
import { v4 as uuidv4 } from 'uuid'
import * as ActionsFile from 'common/Files'

type ButtonAddFileProps = {
  setFiles: Function
  files: File[]
}

function ButtonAddFile({ setFiles, files }: ButtonAddFileProps) {
  const addFile = () => {
    const fileId = uuidv4()

    const fileItem = {
      id: fileId,
      name: 'Sem título',
      content: `/file/${fileId}`,
      active: true,
      status: 'saved',
    }

    const filesNew = files.map((file) => {
      file.active = false
      return file
    })

    const newFiles = [...filesNew, fileItem]

    setFiles(newFiles)

    ActionsFile.setFileList(newFiles)
  }
  return (
    <ButtonAddFileStyle onClick={addFile}>
      + Adicionar arquivo
    </ButtonAddFileStyle>
  )
}

export { ButtonAddFile }
