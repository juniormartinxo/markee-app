import styled, { css } from 'styled-components/macro'

const LogoBox = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

const LogoImg = styled.img`
  width: 35.89px;
  height: 40.29px;
`

const LogoTitle = styled.h1`
  font-size: 33.84px;
  line-height: 44.06px;
  letter-spacing: -8%;
  font-weight: bold;
  margin: 0;
  padding: 0;
  margin-left: 12.89px;
  font-weight: 700;
  font-size: 33.84px;

  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.fonts.secondary};
  `}
`

const LogoSpan = styled.span`
  font-weight: bold;
  margin: 0;
  padding: 0;

  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`

export { LogoBox, LogoImg, LogoTitle, LogoSpan }
