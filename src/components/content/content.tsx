import { useState } from 'react'
import ContentStyled from './content-styled'
import { Editor } from 'components/editor'
import { Viewer } from 'components/viewer'
import { ContentHeader } from 'components/content-header'
import { ContentEditor } from 'components/content-editor'

function Content() {
  const [mkdText, setMkdText] = useState('')

  return (
    <ContentStyled>
      <ContentHeader />
      <ContentEditor>
        <Editor setMkdText={setMkdText} />
        <Viewer mkdText={mkdText} />
      </ContentEditor>
    </ContentStyled>
  )
}

export { Content }
