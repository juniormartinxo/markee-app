import { ReactNode } from 'react'
import ContentEditoStyled from './content-editor-styled'

type ContentEditorProps = {
  children: ReactNode
}

function ContentEditor ({ children }: ContentEditorProps) {
  return <ContentEditoStyled>{children}</ContentEditoStyled>
}

export { ContentEditor }
