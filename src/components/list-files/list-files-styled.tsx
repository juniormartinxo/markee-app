import styled, { css } from 'styled-components/macro'

const ListFilesStyled = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 15px;
`

const ButtonsFilesStyled = styled.button`
  ${({ theme }) => css`
    align-self: center;
    background-color: transparent;
    border: none;
    margin: 15px;
    cursor: pointer;
    display: none;
    color: ${theme.colors.white};

    &:hover {
      color: ${theme.colors.primary};
    }
  `}
`

type ItemFilesStyledProps = {
  fileStatus: string
  fileActive: boolean
}

const ItemFilesStyled = styled.li<ItemFilesStyledProps>`
  ${(props) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: ${() =>
      props.fileStatus === 'editing' && props.theme.colors.lightBlack};

    ${ButtonsFilesStyled} {
      display: ${() => props.fileStatus === 'editing' && 'block'};
      color: ${() => props.fileActive === true && props.theme.colors.primary};
    }

    ${TextLinkStyled} {
      color: ${() => props.fileActive === true && props.theme.colors.primary};
    }

    &:hover {
      background: ${props.theme.colors.lightBlack};
      ${ButtonsFilesStyled} {
        display: block;
      }
    }
  `}
`

const LinkFilesStyled = styled.a`
  ${({ theme }) => css`
    width: 100%;
    padding: 15px 10px;
    text-decoration: none;
    align-self: center;
    border-radius: 3px;
    display: flex;
    align-items: center;
    color: ${theme.colors.white};
    font-family: ${theme.fonts.secondary};
    font-weight: 400;
    line-height: 20.83px;

    &:hover {
      background: ${theme.colors.lightBlack};
    }
  `}
`

const TextLinkStyled = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.fonts.secondary};
    font-weight: 400;
    line-height: 20.83px;
    margin-left: 15px;
  `}
`

export {
  ListFilesStyled,
  ItemFilesStyled,
  LinkFilesStyled,
  ButtonsFilesStyled,
  TextLinkStyled,
}
