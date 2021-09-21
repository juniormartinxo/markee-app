import { RefObject } from 'react'
import ContentStyled from './content-styled'
import { Editor } from 'components/editor'
import { Viewer } from 'components/viewer'
import { ContentHeader } from 'components/content-header'
import { ContentEditor } from 'components/content-editor'
import { File } from 'resources/files/types'

type ContentProps = {
  refInputFileName: RefObject<HTMLInputElement>
  refEditorTextArea: RefObject<HTMLTextAreaElement>
  files: File[]
  setFiles: Function
  currentFileId: string
  mkdText: string
  setMkdText: Function
}

function Content({
  refInputFileName,
  refEditorTextArea,
  files,
  setFiles,
  currentFileId,
  mkdText,
  setMkdText,
}: ContentProps) {
  if (files.length === 0) {
    return null
  }

  return (
    <ContentStyled>
      <ContentHeader
        refInputFileName={refInputFileName}
        files={files}
        setFiles={setFiles}
        currentFileId={currentFileId}
      />
      <ContentEditor>
        <Editor
          setMkdText={setMkdText}
          currentFileId={currentFileId}
          files={files}
          setFiles={setFiles}
          refEditorTextArea={refEditorTextArea}
        />
        <Viewer mkdText={mkdText} />
      </ContentEditor>
    </ContentStyled>
  )
}

export { Content }
