import styled, { css } from 'styled-components/macro'

const SidebarStyled = styled.div`
  grid-area: sidebar;
  height: 100vh;

  ${({ theme }) => css`
    background: ${theme.colors.black};
  `}
`

export default SidebarStyled
