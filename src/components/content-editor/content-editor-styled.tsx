import styled, { css } from 'styled-components/macro'

const ContentEditoStyled = styled.div`
  grid-area: content-editor;
  display: flex;
  justify-content: space-between;

  ${({ theme }) => css`
    font-family: ${theme.fonts.primary};
    font-weight: 500;
    font-size: ${theme.fontSizes.small};
  `};
`

export default ContentEditoStyled
