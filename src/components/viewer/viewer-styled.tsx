import styled, { css } from 'styled-components/macro'

const ViewerStyled = styled.div`
  width: 100%;
  padding: 0 10px 0 25px;
  margin: 0 0 15px 0;
  min-height: 300px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary};
  `};

  *:first-child {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  pre {
    padding: 15px;
    background: #f3f3f387;
    border-radius: 2px;
    border: 1px solid #e7e7e7;
    margin: 0;
  }
`

export default ViewerStyled
