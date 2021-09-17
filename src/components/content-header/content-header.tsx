import { ContentHeaderStyled, InputFileStyled } from './content-header-styled'
import { IcoImage } from 'components/ico-image'

function ContentHeader() {
  return (
    <ContentHeaderStyled>
      <IcoImage pathImage="ico-file-green.png" />
      <InputFileStyled value="CONTRIBUT" />
    </ContentHeaderStyled>
  )
}

export { ContentHeader }
