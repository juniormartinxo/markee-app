import { RefObject } from 'react'
import { ContentHeaderStyled, InputFileStyled } from './content-header-styled'
import * as Icon from 'ui/icons'

type ContentHeaderProps = {
  refInputFileName: RefObject<HTMLInputElement>
}

function ContentHeader({ refInputFileName }: ContentHeaderProps) {
  return (
    <ContentHeaderStyled>
      <Icon.FileActive />
      <InputFileStyled ref={refInputFileName} />
    </ContentHeaderStyled>
  )
}

export { ContentHeader }
