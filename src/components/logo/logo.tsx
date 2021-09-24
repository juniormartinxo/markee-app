import { LogoBox, LogoImg, LogoTitle, LogoSpan } from './logo-styled'
import MarkeeLogo from './markee-logo.png'

function Logo() {
  function handleClick() {
    window.history.pushState(null, '', '/')
  }

  return (
    <LogoBox>
      <LogoImg
        src={MarkeeLogo}
        alt="Markee"
        onClick={() => {
          handleClick()
        }}
      />
      <LogoTitle
        onClick={() => {
          handleClick()
        }}
      >
        markee<LogoSpan>.</LogoSpan>
      </LogoTitle>
    </LogoBox>
  )
}

export { Logo }
