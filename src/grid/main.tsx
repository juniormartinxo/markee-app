import { ReactNode } from 'react'
import styled, { css } from 'styled-components/macro'

type MainProps = {
  children: ReactNode | ReactNode[]
}

function Main({ children }: MainProps) {
  return <MainStyled>{children}</MainStyled>
}

const MainStyled = styled.main`
  display: grid;
  grid-template-columns: 332px auto;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: 'sidebar content';
  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
`

export default Main
