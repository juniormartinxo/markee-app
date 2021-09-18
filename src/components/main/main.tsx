import { ReactNode } from 'react'
import MainStyled from './main-styled'

type MainProps = {
  children: ReactNode | ReactNode[]
}

function Main({ children }: MainProps) {
  return <MainStyled>{children}</MainStyled>
}

export default Main
