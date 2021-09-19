import { ChangeEvent } from 'react'
import { EditorStyled, TextEditorStyled } from './editor-styled'

function Editor({ setMkdText }: any) {
  return (
    <EditorStyled>
      <TextEditor setMkdText={setMkdText} />
    </EditorStyled>
  )
}

function TextEditor({ setMkdText }: any) {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMkdText(e.target.value)
  }

  return (
    <TextEditorStyled
      name=""
      id=""
      placeholder="Digite aqui o seu markdown"
      onChange={handleChange}
    />
  )
}

export { Editor }
