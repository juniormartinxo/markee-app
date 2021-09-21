import { RefObject } from 'react'
import ButtonAddFileStyle from './button-add-file-styled'
import { File } from 'resources/files/types'
import { v4 as uuidv4 } from 'uuid'
import * as FileActions from 'common/file-actions'

type ButtonAddFileProps = {
  setFiles: Function
  files: File[]
  refInputFileName: RefObject<HTMLInputElement>
}

function ButtonAddFile({
  setFiles,
  files,
  refInputFileName,
}: ButtonAddFileProps) {
  const addFile = () => {
    const fileId = uuidv4()

    const fileItem = {
      id: fileId,
      name: 'Sem título',
      content: '',
      active: true,
      status: 'saved',
    }

    if (refInputFileName.current) {
      refInputFileName.current.value = 'Sem título'
    }

    refInputFileName.current?.focus()

    const filesNew = files.map((file) => {
      file.active = false
      return file
    })

    const newFiles = [fileItem, ...filesNew]

    setFiles(newFiles)

    FileActions.setFileList(newFiles)
  }
  return (
    <ButtonAddFileStyle onClick={addFile}>
      + Adicionar arquivo
    </ButtonAddFileStyle>
  )
}

export { ButtonAddFile }
