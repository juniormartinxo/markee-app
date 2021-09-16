import { Logo } from 'components/logo'
import SidebarStyled from './sidebar-styled'
import { TitleLinethrough } from 'components/title-linethrough'

function Sidebar() {
  return (
    <SidebarStyled>
      <Logo />
      <TitleLinethrough>Arquivos</TitleLinethrough>
    </SidebarStyled>
  )
}

export { Sidebar }
