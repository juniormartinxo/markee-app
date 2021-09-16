import { Logo } from 'components/logo'
import SidebarStyled from './sidebar-styled'
import { TitleLinethrough } from 'components/title-linethrough'
import { ButtonAddFile } from 'components/button-add-file'
import { ContainerButtonsSidebar } from 'components/container-buttons-sidebar'

function Sidebar() {
  return (
    <SidebarStyled>
      <Logo />
      <TitleLinethrough>Arquivos</TitleLinethrough>
      <ContainerButtonsSidebar>
        <ButtonAddFile />
      </ContainerButtonsSidebar>
    </SidebarStyled>
  )
}

export { Sidebar }
