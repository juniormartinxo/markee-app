import styled, { css } from 'styled-components/macro'
const MainStyled = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: 'sidebar' 'content';
  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}

  @media (min-width: 600px) {
    grid-template-columns: 300px auto;
    grid-template-areas: 'sidebar content';
  }
`
export default MainStyled
