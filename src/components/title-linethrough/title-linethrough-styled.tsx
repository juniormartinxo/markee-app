import styled, { css } from 'styled-components/macro'

const TitleLinethroughBox = styled.div`
  display: block;
  margin: 58.3px 15px 15px 15px;
  border-top: 2px solid ${({ theme }) => theme.colors.primary};
`

const TitleLinethroughStyle = styled.h3`
  font-weight: 400;
  font-size: 1rem;
  margin: 15px 5.5px 15px 40.5px;
  padding: 8px;
  position: relative;
  top: -32px;
  float: left;
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.white};
    background-color: ${theme.colors.black};
  `};
`

export { TitleLinethroughStyle, TitleLinethroughBox }
