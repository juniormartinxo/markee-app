import { RefObject } from 'react'
import { Logo } from 'components/logo'
import SidebarStyled from './sidebar-styled'
import { TitleLinethrough } from 'components/title-linethrough'
import { ButtonAddFile } from 'components/button-add-file'
import { ContainerButtonsSidebar } from 'components/container-buttons-sidebar'
import { ListFiles } from 'components/list-files'
import { File } from 'resources/files/types'

type SidebarProps = {
  refInputFileName: RefObject<HTMLInputElement>
  files: File[]
  setFiles: Function
  setCurrentFileId: Function
}

function Sidebar({
  refInputFileName,
  files,
  setFiles,
  setCurrentFileId,
}: SidebarProps) {
  return (
    <SidebarStyled>
      <Logo />
      <TitleLinethrough>Arquivos</TitleLinethrough>
      <ContainerButtonsSidebar>
        <ButtonAddFile
          setFiles={setFiles}
          files={files}
          refInputFileName={refInputFileName}
        />
      </ContainerButtonsSidebar>
      <ListFiles
        files={files}
        setFiles={setFiles}
        setCurrentFileId={setCurrentFileId}
        refInputFileName={refInputFileName}
      />
    </SidebarStyled>
  )
}

export { Sidebar }
