import styled from 'styled-components/macro'

function Logo() {
  return (
    <LogoBox>
      <img src="favicon.png" alt="" />
    </LogoBox>
  )
}

const LogoBox = styled.div`
  width: 100%;
`

export { Logo }
