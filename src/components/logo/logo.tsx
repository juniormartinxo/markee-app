import { LogoBox, LogoImg, LogoTitle, LogoSpan } from './logo-styled'
import MarkeeLogo from './markee-logo.png'

function Logo() {
  return (
    <LogoBox>
      <LogoImg src={MarkeeLogo} alt="" />
      <LogoTitle>
        markee<LogoSpan>.</LogoSpan>
      </LogoTitle>
    </LogoBox>
  )
}

export { Logo }
