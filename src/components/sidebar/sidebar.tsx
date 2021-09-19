import { useState } from 'react'
import { Logo } from 'components/logo'
import SidebarStyled from './sidebar-styled'
import { TitleLinethrough } from 'components/title-linethrough'
import { ButtonAddFile } from 'components/button-add-file'
import { ContainerButtonsSidebar } from 'components/container-buttons-sidebar'
import { ListFiles } from 'components/list-files'
import { File } from 'resources/files/types'

function Sidebar() {
  const [files, setFiles] = useState<File[]>([])
  return (
    <SidebarStyled>
      <Logo />
      <TitleLinethrough>Arquivos</TitleLinethrough>
      <ContainerButtonsSidebar>
        <ButtonAddFile setFiles={setFiles} files={files} />
      </ContainerButtonsSidebar>
      <ListFiles files={files} />
    </SidebarStyled>
  )
}

export { Sidebar }
