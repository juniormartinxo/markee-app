import { EditorStyled, TextEditorStyled } from './editor-styled'

function Editor() {
  return (
    <EditorStyled>
      <TextEditor />
    </EditorStyled>
  )
}

function TextEditor() {
  return (
    <TextEditorStyled name="" id="" placeholder="Digite aqui o seu markdown" />
  )
}

export { Editor }
