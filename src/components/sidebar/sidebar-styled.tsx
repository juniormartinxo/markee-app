import styled, { css } from 'styled-components/macro'

const SidebarStyled = styled.div`
  grid-area: sidebar;
  height: 100vh;
  ${({ theme }) => css`
    background: ${theme.colors.black};
  `}
`
const ButtonAddFileStyle = styled.button`
  width: 100%;
  padding: 8px;
  display: block;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    ${({ theme }) => css`
      background: ${theme.colors.primaryHover};
      transition: background, 0.5s;
    `}
  }
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.lightBlack};
  `}
`

const ContainerButtonsSidebarStyled = styled.div`
  padding: 15px;
`

export { SidebarStyled, ButtonAddFileStyle, ContainerButtonsSidebarStyled }
