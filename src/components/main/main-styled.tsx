import styled, { css } from 'styled-components/macro'
const MainStyled = styled.main`
  display: grid;
  grid-template-columns: 15vw auto;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: 'sidebar content';
  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
`
export default MainStyled
