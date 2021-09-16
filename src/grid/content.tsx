import { ReactNode } from 'react'
import styled, { css } from 'styled-components/macro'

type ContentProps = {
  children: ReactNode | ReactNode[]
}

function Content({ children }: ContentProps) {
  return <ContentStyled>{children}</ContentStyled>
}

const ContentStyled = styled.div`
  grid-area: content;
  height: 100vh;

  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
`

export default Content
