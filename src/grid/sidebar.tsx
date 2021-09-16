import styled, { css } from 'styled-components/macro'
import { Logo } from 'logo'

function Sidebar() {
  return (
    <SidebarStyled>
      <Logo />
    </SidebarStyled>
  )
}

const SidebarStyled = styled.div`
  grid-area: sidebar;
  height: 100vh;

  ${({ theme }) => css`
    background: ${theme.colors.black};
  `}
`

export default Sidebar
