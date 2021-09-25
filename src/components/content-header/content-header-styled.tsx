import styled, { css } from 'styled-components/macro'

const ContentHeaderStyled = styled.div`
  grid-area: content-header;
  display: flex;
  align-items: center;
  padding: 0 25px;
`

const InputFileStyled = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  background-color: transparent;
  width: 100%;
  border-bottom: 2px solid transparent;
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary};
    font-weight: 500;
    font-size: ${theme.fontSizes.small};
  `};
  :focus {
    outline: none;
    ${({ theme }) => css`
      border-bottom: 2px solid ${theme.colors.primary};
    `};
  }
`

export { ContentHeaderStyled, InputFileStyled }
