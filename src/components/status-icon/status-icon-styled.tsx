import styled, { css, keyframes } from 'styled-components/macro'
import * as icon from 'ui/icons'
import { StatusIcon, StatusIconProps } from './status-icon'

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

const StatusIconStyled = styled(StatusIcon)<StatusIconProps>`
  ${({ status }) => css`
    position: absolute;
    right: 12px;
    top: 50%;
    margin-top: ${status === 'saving' ? -5 : 0}px;
    transform: translateY(-50%);
  `}
`

export { Edit, Loading, StatusIconStyled }
