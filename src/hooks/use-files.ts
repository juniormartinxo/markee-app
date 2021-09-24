import * as localForage from 'localforage'
import { File } from 'resources/files/types'
import { RefObject } from 'react'
import { v4 as uuidv4 } from 'uuid'

type UseFileType = {
  files: File[]
  currentFileId: string
  refInputFileName: RefObject<HTMLInputElement>
  refEditorTextArea: RefObject<HTMLTextAreaElement>
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

type OnSelectedType = {
  files: File[]
  fileId: string
  fileName: string
  fileContent: string
  refInputFileName: RefObject<HTMLInputElement>
  refEditorTextArea: RefObject<HTMLTextAreaElement>
  setFiles: Function
  setMkdText: Function
}

export function useFiles() {
  const keyApp = 'markee-app'

  const onChange = ({
    files,
    currentFileId,
    refInputFileName,
    refEditorTextArea,
    setFiles,
  }: UseFileType) => {
    const filesNew = files.map((file) => {
      file.active = file.id === currentFileId
      file.status = file.id === currentFileId ? 'editing' : 'saved'
      file.name =
        file.id === currentFileId
          ? refInputFileName.current?.value ?? file.name
          : file.name
      file.content =
        file.id === currentFileId
          ? refEditorTextArea.current?.value ?? file.content
          : file.content

      return file
    })

    setFiles(filesNew)

    localForage.setItem(keyApp, JSON.stringify(filesNew))
  }

  const onSelected = ({
    files,
    fileId,
    fileName,
    fileContent,
    refInputFileName,
    refEditorTextArea,
    setFiles,
    setMkdText,
  }: OnSelectedType) => {
    const filesNew = files.map((file) => {
      file.active = file.id === fileId
      file.status = file.id === fileId ? 'editing' : 'saved'

      return file
    })

    setFiles(filesNew)

    localForage.setItem(keyApp, JSON.stringify(filesNew))

    if (refInputFileName.current) {
      refInputFileName.current.value = fileName
      refInputFileName.current.focus()
    }

    if (refEditorTextArea.current) {
      refEditorTextArea.current.value = fileContent

      setMkdText(fileContent)
    }
  }

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
    refEditorTextArea,
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
        saveFiles({
          files,
          currentFileId,
          refInputFileName,
          refEditorTextArea,
          setFiles,
        })
      }, 300)
    })
  }

  const saveFiles = ({
    files,
    currentFileId,
    refInputFileName,
    refEditorTextArea,
    setFiles,
  }: UseFileType) => {
    const filesNew = files.map((file) => {
      file.active = file.id === currentFileId
      file.status = file.id === currentFileId ? 'saved' : 'saved'
      file.name =
        file.id === currentFileId
          ? refInputFileName.current?.value ?? file.name
          : file.name
      file.content =
        file.id === currentFileId
          ? refEditorTextArea.current?.value ?? file.content
          : file.content

      return file
    })

    setFiles(filesNew)

    localForage.setItem(keyApp, JSON.stringify(filesNew)).then(() => {
      console.log('Arquivos salvos com sucesso!')
    })
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
    onSelected,
    onChange,
  }
}
