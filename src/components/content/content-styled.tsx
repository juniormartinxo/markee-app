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

export default ContentStyled
