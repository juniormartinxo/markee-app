import { ReactNode } from 'react'
import ContentStyled from './content-styled'

type ContentProps = {
  children: ReactNode | ReactNode[]
}

function Content({ children }: ContentProps) {
  return <ContentStyled>{children}</ContentStyled>
}

export { Content }
