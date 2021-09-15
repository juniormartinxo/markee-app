import styled, { css } from 'styled-components/macro'

function Title() {
  return <TitleCss>App</TitleCss>
}

const TitleCss = styled.h1`
  ${({ theme }) => css`
    background: ${theme.colors.black};
    color: ${theme.colors.primary};
  `}
`

export default Title
