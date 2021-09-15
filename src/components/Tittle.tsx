import styled, { css } from 'styled-components/macro'

function Title({ children }) {
  return <h1>{children}</h1>
}

const TitleCss = styled.h1`
  ${({ theme }) => css`
    background: ${theme.colors.black};
    color: ${theme.colors.primary};
  `}
`
