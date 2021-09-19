import { File } from 'resources/files/types'

export function setFile(fileId: string, file: File) {
  localStorage.setItem(`${fileId}`, JSON.stringify(file))
}

export function getFile(fileId: string) {
  return localStorage.getItem(`${fileId}`)
}

export function setFileList(files: File[]) {
  localStorage.setItem('markee-app', JSON.stringify(files))
}

export function getFileList() {
  return localStorage.getItem('markee-app')
}
