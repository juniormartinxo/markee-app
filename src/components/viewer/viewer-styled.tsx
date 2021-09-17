import styled, { css } from 'styled-components/macro'

const ViewerStyled = styled.div`
  width: 40vw;
  padding: 0 10px 0 25px;
  margin: 0 0 15px 0;

  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary};
  `};

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`

export default ViewerStyled
