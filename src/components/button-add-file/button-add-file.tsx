import ButtonAddFileStyle from './button-add-file-styled'
import { File } from 'resources/files/types'
import { v4 as uuidv4 } from 'uuid'

type ButtonAddFileProps = {
  setFiles: Function
  files: File[]
}

function ButtonAddFile({ setFiles, files }: ButtonAddFileProps) {
  const addFile = () => {
    const fileItem = {
      id: uuidv4(),
      name: 'Sem título',
      content: '',
      active: true,
      status: 'saved',
    }

    const filesNew = files.map((file) => {
      file.active = false
      file.status = 'saved'
      return file
    })

    setFiles([fileItem, ...filesNew])
  }
  return (
    <ButtonAddFileStyle onClick={addFile}>
      + Adicionar arquivo
    </ButtonAddFileStyle>
  )
}

export { ButtonAddFile }
