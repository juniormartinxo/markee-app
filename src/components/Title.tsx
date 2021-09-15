import { ReactNode } from 'react'
import styled, { css } from 'styled-components/macro'

type TitleProps = {
  children: ReactNode | ReactNode[]
}

function Title({ children }: TitleProps) {
  return <TitleCss>{children}</TitleCss>
}

const TitleCss = styled.h1`
  ${({ theme }) => css`
    background: ${theme.colors.black};
    color: ${theme.colors.primary};
  `}
`

export default Title
