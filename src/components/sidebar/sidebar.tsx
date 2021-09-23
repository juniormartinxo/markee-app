import { RefObject } from 'react'
import { Logo } from 'components/logo'
import { SidebarStyled, ButtonAddFileStyle } from './sidebar-styled'
import { TitleLinethrough } from 'components/title-linethrough'
import { ContainerButtonsSidebar } from 'components/container-buttons-sidebar'
import { ListFiles } from 'components/list-files'
import { File } from 'resources/files/types'
import { useFile } from 'hooks/useFile'

type SidebarProps = {
  refInputFileName: RefObject<HTMLInputElement>
  refEditorTextArea: RefObject<HTMLTextAreaElement>
  files: File[]
  setFiles: Function
  setCurrentFileId: Function
  setMkdText: Function
  setStatusContent: Function
}

function Sidebar({
  refInputFileName,
  refEditorTextArea,
  files,
  setFiles,
  setCurrentFileId,
  setMkdText,
  setStatusContent,
}: SidebarProps) {
  const { addFile } = useFile()

  return (
    <SidebarStyled>
      <Logo />
      <TitleLinethrough>Arquivos</TitleLinethrough>
      <ContainerButtonsSidebar>
        <ButtonAddFileStyle
          onClick={() => {
            addFile({
              files,
              setFiles,
              setCurrentFileId,
              refInputFileName,
              refEditorTextArea,
              setMkdText,
              setStatusContent,
            })
          }}
        >
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
