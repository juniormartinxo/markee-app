import styled, { css } from 'styled-components/macro'

const ListFilesStyled = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 15px;
`

const ButtonsFilesStyled = styled.button`
  align-self: center;
  background-color: transparent;
  border: none;
  margin: 15px;
  cursor: pointer;
  display: none;

  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}

  &:hover {
    ${({ theme }) => css`
      color: ${theme.colors.primary};
    `}
  }
`

type ItemFilesStyledProps = {
  fileStatus: string
}

const ItemFilesStyled = styled.li<ItemFilesStyledProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: ${(props) =>
    props.fileStatus === 'editing' && props.theme.colors.lightBlack};

  &:hover {
    ${({ theme }) => css`
      background: ${theme.colors.lightBlack};
    `}

    ${ButtonsFilesStyled} {
      display: block;
    }
  }
`

const LinkFilesStyled = styled.a`
  width: 100%;
  padding: 15px 10px;
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

export { ListFilesStyled, ItemFilesStyled, LinkFilesStyled, ButtonsFilesStyled }
