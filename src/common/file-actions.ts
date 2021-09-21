// import { File } from 'resources/files/types'

export type FileStorage = {
  id: string
  name: string
  content: string
  active: boolean
  status: string
}

export function setFile(fileId: string, file: FileStorage) {
  localStorage.setItem(fileId, JSON.stringify(file))
}

export function getFile(fileId: string) {
  return localStorage.getItem(`${fileId}`)
}

export function removeFile(fileId: string, files: FileStorage[]) {
  const storageFiles = files.filter((file) => file.id !== fileId)

  setFileList(storageFiles)
}

export function setFileList(files: FileStorage[]) {
  localStorage.setItem('markee-app', JSON.stringify(files))
}

export function getFileList() {
  return localStorage.getItem('markee-app')
}
