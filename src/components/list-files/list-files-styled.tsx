import styled, { css } from 'styled-components/macro'

import * as icon from 'ui/icons'

const transitionStart = '0.2s'
const transitionEnd = '0.3s'

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

const DefaultButton = styled.button`
  cursor: pointer;
`

const RemoveButtonStyled = styled(DefaultButton)`
  background: transparent;
  border: 0;
  display: none;
  margin: 0 0 0 auto;
  padding: 0;
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
`

const RemoveIcon = styled(icon.Plus)`
  margin: 0;
  transform: rotate(45deg);
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

    ${ButtonsFilesStyled} {
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
  RemoveIcon,
  RemoveButtonStyled,
}
