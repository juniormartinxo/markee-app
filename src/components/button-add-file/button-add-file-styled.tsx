import styled, { css } from 'styled-components/macro'

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
export default ButtonAddFileStyle
