import styled, { css } from 'styled-components/macro'

const ContentStyled = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 8fr;
  gap: 0px 0px;
  grid-template-areas:
    'content-header'
    'content-editor';
  ${({ theme }) => css`
    background: ${theme.colors.white};
  `};
`

const ContentEditorStyled = styled.div`
  grid-area: content-editor;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;

  ${({ theme }) => css`
    font-family: ${theme.fonts.primary};
    font-weight: 500;
    font-size: ${theme.fontSizes.small};
  `};
`

export { ContentStyled, ContentEditorStyled }
