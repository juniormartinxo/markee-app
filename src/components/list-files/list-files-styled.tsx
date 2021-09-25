import styled, { css } from 'styled-components/macro'

const transitionStart = '0.2s'
const transitionEnd = '0.3s'

const ListFilesStyled = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 15px;
`

const ButtonFileStyled = styled.button`
  ${({ theme }) => css`
    align-self: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: none;
    color: ${theme.colors.white};
    transition: ${transitionEnd} linear color;
    position: absolute;
    right: 0;
    height: 100%;
    padding: 0 15px;

    &:hover {
      color: ${theme.colors.primary};
      transition: ${transitionStart} linear color;
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
    position: relative;
    width: 100%;
    background-color: ${() =>
      props.fileStatus === 'editing' && props.theme.colors.lightBlack};
    transition: ${transitionEnd} linear background-color;
    margin-bottom: 1px;

    ${ButtonFileStyled} {
      display: ${() => props.fileStatus === 'editing' && 'block'};
      color: ${() => props.fileActive === true && props.theme.colors.primary};
      transition: ${transitionEnd} linear color;
      border-left: 1px solid ${props.theme.colors.black};
    }

    ${TextLinkStyled} {
      color: ${() => props.fileActive === true && props.theme.colors.primary};
    }

    &:hover {
      background-color: ${props.theme.colors.lightBlack};
      transition: ${transitionStart} linear background-color;

      ${ButtonFileStyled} {
        display: block;
      }
    }
  `}
`

const LinkFilesStyled = styled.a`
  width: 100%;
  padding: 15px 10px;
  text-decoration: none;
  align-self: center;
  border-radius: 3px;
  display: flex;
  align-items: center;
  font-weight: 400;
  line-height: 20.83px;

  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.fonts.secondary};
  `}
`

const TextLinkStyled = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  width: 80%;

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
  ButtonFileStyled,
  TextLinkStyled,
}
