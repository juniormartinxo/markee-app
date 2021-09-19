import { RefObject, useState } from 'react'
import ContentStyled from './content-styled'
import { Editor } from 'components/editor'
import { Viewer } from 'components/viewer'
import { ContentHeader } from 'components/content-header'
import { ContentEditor } from 'components/content-editor'

type ContentProps = {
  refInputFileName: RefObject<HTMLInputElement>
}

function Content({ refInputFileName }: ContentProps) {
  const [mkdText, setMkdText] = useState('')

  return (
    <ContentStyled>
      <ContentHeader refInputFileName={refInputFileName} />
      <ContentEditor>
        <Editor setMkdText={setMkdText} />
        <Viewer mkdText={mkdText} />
      </ContentEditor>
    </ContentStyled>
  )
}

export { Content }
