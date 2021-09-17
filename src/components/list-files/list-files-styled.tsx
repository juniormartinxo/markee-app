import styled, { css } from 'styled-components/macro'

const ListFilesStyled = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 15px;
`

const ItemFilesStyled = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${({ theme }) => css`
    &:hover {
      background: ${theme.colors.lightBlack};
    }
  `}
`

const LinkFilesStyled = styled.a`
  width: 100%;
  padding: 8px 10px;
  text-decoration: none;
  align-self: center;
  border-radius: 3px;
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.fonts.secondary};
    font-weight: 400;
    line-height: 20.83px;
    &:hover {
      background: ${theme.colors.lightBlack};
    }
  `}
`

const ButtonsFilesStyled = styled.button`
  align-self: center;
  background-color: transparent;
  border: none;
  margin: 15px;
  padding: 0 5px;
  cursor: pointer;
  border-radius: 50%;

  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}

  &:hover {
    ${({ theme }) => css`
      color: ${theme.colors.black};
      background-color: ${theme.colors.primary};
    `}
  }
`

export { ListFilesStyled, ItemFilesStyled, LinkFilesStyled, ButtonsFilesStyled }
