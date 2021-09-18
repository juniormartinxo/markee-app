import styled, { keyframes } from 'styled-components/macro'
import * as icon from 'ui/icons'

const Edit = styled(icon.Ellipse)`
  margin-right: 2px;
`

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`

const Loading = styled(icon.Loading)`
  animation: ${rotation} 1s infinite linear;
`

export { Edit, Loading }
