import { ReactNode } from 'react'
import ContainerButtonsSidebarStyled from './container-buttons-sidebar-styled'

type ContainerButtonsSidebarProps = {
  children: ReactNode | ReactNode[]
}

function ContainerButtonsSidebar ({ children }: ContainerButtonsSidebarProps) {
  return (
    <ContainerButtonsSidebarStyled>{children}</ContainerButtonsSidebarStyled>
  )
}

export { ContainerButtonsSidebar }
