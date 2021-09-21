type FileStorage = {
  id: string
  name: string
  content: string
  active: boolean
  status: string
}

export function useFiles() {
  function setFile(fileId: string, file: FileStorage) {
    localStorage.setItem(fileId, JSON.stringify(file))
  }

  function getFile(fileId: string) {
    return localStorage.getItem(`${fileId}`)
  }

  function removeFile(fileId: string, files: FileStorage[]) {
    const storageFiles = files.filter((file) => file.id !== fileId)

    setFileList(storageFiles)
  }

  function setFileList(files: FileStorage[]) {
    localStorage.setItem('markee-app', JSON.stringify(files))
  }

  function getFileList() {
    return localStorage.getItem('markee-app')
  }

  return {
    getFile,
    getFileList,
    removeFile,
    setFile,
    setFileList,
  }
}
