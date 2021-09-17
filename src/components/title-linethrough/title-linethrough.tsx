import { ReactNode } from 'react'
import {
  TitleLinethroughStyle,
  TitleLinethroughBox,
} from './title-linethrough-styled'

type TitleLinethroughProps = {
  children: ReactNode | ReactNode[]
}

function TitleLinethrough ({ children }: TitleLinethroughProps) {
  return (
    <TitleLinethroughBox>
      <TitleLinethroughStyle>{children}</TitleLinethroughStyle>
    </TitleLinethroughBox>
  )
}

export { TitleLinethrough }
