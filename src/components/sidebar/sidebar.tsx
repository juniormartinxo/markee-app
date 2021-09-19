import { useState, RefObject } from 'react'
import { Logo } from 'components/logo'
import SidebarStyled from './sidebar-styled'
import { TitleLinethrough } from 'components/title-linethrough'
import { ButtonAddFile } from 'components/button-add-file'
import { ContainerButtonsSidebar } from 'components/container-buttons-sidebar'
import { ListFiles } from 'components/list-files'
import { File } from 'resources/files/types'
import * as FileActions from 'common/file-actions'

type SidebarProps = {
  refInputFileName: RefObject<HTMLInputElement>
}

function Sidebar({ refInputFileName }: SidebarProps) {
  const [files, setFiles] = useState<File[]>(
    JSON.parse(FileActions.getFileList() ?? '[]'),
  )

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
      <ListFiles files={files} setFiles={setFiles} />
    </SidebarStyled>
  )
}

export { Sidebar }
