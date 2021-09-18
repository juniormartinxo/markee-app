import { ContentHeaderStyled, InputFileStyled } from './content-header-styled'
import * as Icon from 'ui/icons'

function ContentHeader() {
  return (
    <ContentHeaderStyled>
      <Icon.FileActive />
      <InputFileStyled value="CONTRIBUT" />
    </ContentHeaderStyled>
  )
}

export { ContentHeader }
