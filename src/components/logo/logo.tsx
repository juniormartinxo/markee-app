import { LogoBox, LogoImg, LogoTitle, LogoSpan } from './logo-styled'

function Logo() {
  return (
    <LogoBox>
      <LogoImg src="favicon.png" alt="" />
      <LogoTitle>
        markee<LogoSpan>.</LogoSpan>
      </LogoTitle>
    </LogoBox>
  )
}

export { Logo }
