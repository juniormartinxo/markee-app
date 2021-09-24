import { RefObject } from 'react'
import { Logo } from 'components/logo'
import {
  SidebarStyled,
  ButtonAddFileStyle,
  ContainerButtonsSidebarStyled,
} from './sidebar-styled'
import { TitleLinethrough } from 'components/title-linethrough'
import { ListFiles } from 'components/list-files'
import { File } from 'resources/files/types'
import { useFiles } from 'hooks/use-files'

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
  const { addFile } = useFiles()

  return (
    <SidebarStyled>
      <Logo />
      <TitleLinethrough>Arquivos</TitleLinethrough>
      <ContainerButtonsSidebarStyled>
        <ButtonAddFileStyle
          onClick={() => {
            addFile({
              files,
              setFiles,
              setCurrentFileId,
              refInputFileName,
              refEditorTextArea,
              setMkdText,
            })
          }}
        >
          + Adicionar arquivo
        </ButtonAddFileStyle>
      </ContainerButtonsSidebarStyled>
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
