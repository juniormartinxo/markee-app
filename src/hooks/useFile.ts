import * as localForage from 'localforage'
import { File } from 'resources/files/types'
import { RefObject } from 'react'
import { v4 as uuidv4 } from 'uuid'

type UseFileType = {
  files: File[]
  currentFileId: string
  refInputFileName: RefObject<HTMLInputElement>
  setFiles: Function
}

type AddFileType = {
  files: File[]
  setFiles: Function
  setCurrentFileId: Function
  refInputFileName: RefObject<HTMLInputElement>
  refEditorTextArea: RefObject<HTMLTextAreaElement>
  setMkdText: Function
}

type RemoveFileType = {
  files: File[]
  fileId: string
  setFiles: Function
}

export function useFile() {
  const keyApp = 'markee-app'

  const addFile = ({
    files,
    setFiles,
    setCurrentFileId,
    refInputFileName,
    refEditorTextArea,
    setMkdText,
  }: AddFileType) => {
    const fileId = uuidv4()

    const fileItem = {
      id: fileId,
      name: 'Sem título',
      content: '',
      active: true,
      status: 'saved',
    }

    setCurrentFileId(fileItem.id)

    if (refInputFileName.current) {
      refInputFileName.current.focus()
      refInputFileName.current.value = fileItem.name
    }

    if (refEditorTextArea.current) {
      refEditorTextArea.current.value = fileItem.content

      setMkdText(fileItem.content)
    }

    const filesNew = files.map((file) => {
      file.active = false
      return file
    })

    const newFiles = [fileItem, ...filesNew]

    setFiles(newFiles)

    localForage.setItem(keyApp, JSON.stringify(filesNew))
  }

  const editFiles = ({
    files,
    currentFileId,
    refInputFileName,
    setFiles,
  }: UseFileType) => {
    const filesNew = files.map((file) => {
      file.active = file.id === currentFileId
      file.status = file.id === currentFileId ? 'saving' : 'saved'

      return file
    })

    setFiles(filesNew)

    localForage.setItem(keyApp, JSON.stringify(filesNew)).then(() => {
      setTimeout(() => {
        saveFiles({ files, currentFileId, setFiles, refInputFileName })
      }, 300)

      console.log('Arquivos salvos com sucesso!')
    })
  }

  const saveFiles = ({
    files,
    currentFileId,
    refInputFileName,
    setFiles,
  }: UseFileType) => {
    const filesNew = files.map((file) => {
      file.active = file.id === currentFileId
      file.status = file.id === currentFileId ? 'saved' : 'saved'
      file.name =
        file.id === currentFileId
          ? refInputFileName.current?.value ?? file.name
          : file.name

      return file
    })

    setFiles(filesNew)

    localForage.setItem(keyApp, JSON.stringify(filesNew)).then(() => {
      console.log('Arquivos salvos com sucesso!')
    })
  }

  function getFiles() {
    if (!localForage.getItem(keyApp)) return
    return localForage.getItem(keyApp)
  }

  function removeFile({ files, fileId, setFiles }: RemoveFileType) {
    const filesNew = files.filter((file) => file.id !== fileId)

    setFiles(filesNew)

    localForage.setItem(keyApp, JSON.stringify(filesNew))
  }

  return {
    addFile,
    editFiles,
    saveFiles,
    removeFile,
    getFiles,
  }
}
