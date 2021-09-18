import ContentStyled from './content-styled'
import { Editor } from 'components/editor'
import { Viewer } from 'components/viewer'
import { ContentHeader } from 'components/content-header'
import { ContentEditor } from 'components/content-editor'

/*
type ContentProps = {
  children: ReactNode | ReactNode[]
}
*/

function Content() {
  return (
    <ContentStyled>
      <ContentHeader />
      <ContentEditor>
        <Editor />
        <Viewer />
      </ContentEditor>
    </ContentStyled>
  )
}

export { Content }
