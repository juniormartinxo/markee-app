import styled, { css } from 'styled-components/macro'

const ContentStyled = styled.div`
  grid-area: content;
  height: 100vh;

  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
`

export default ContentStyled
