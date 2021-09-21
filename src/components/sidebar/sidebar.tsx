import { RefObject } from 'react'
import { Logo } from 'components/logo'
import { SidebarStyled, ButtonAddFileStyle } from './sidebar-styled'
import { TitleLinethrough } from 'components/title-linethrough'
import { ContainerButtonsSidebar } from 'components/container-buttons-sidebar'
import { ListFiles } from 'components/list-files'
import { File } from 'resources/files/types'
import { v4 as uuidv4 } from 'uuid'
import * as FileActions from 'common/file-actions'

type SidebarProps = {
  refInputFileName: RefObject<HTMLInputElement>
  refEditorTextArea: RefObject<HTMLTextAreaElement>
  files: File[]
  setFiles: Function
  setCurrentFileId: Function
  setMkdText: Function
}

function Sidebar({
  refInputFileName,
  refEditorTextArea,
  files,
  setFiles,
  setCurrentFileId,
  setMkdText,
}: SidebarProps) {
  const addFile = () => {
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
      refInputFileName.current.value = fileItem.name

      refInputFileName.current.focus()
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

    FileActions.setFileList(newFiles)
  }
  return (
    <SidebarStyled>
      <Logo />
      <TitleLinethrough>Arquivos</TitleLinethrough>
      <ContainerButtonsSidebar>
        <ButtonAddFileStyle onClick={addFile}>
          + Adicionar arquivo
        </ButtonAddFileStyle>
      </ContainerButtonsSidebar>
      <ListFiles
        files={files}
        setFiles={setFiles}
        setCurrentFileId={setCurrentFileId}
        refInputFileName={refInputFileName}
        refEditorTextArea={refEditorTextArea}
        setMkdText={setMkdText}
      />
    </SidebarStyled>
  )
}

export { Sidebar }
