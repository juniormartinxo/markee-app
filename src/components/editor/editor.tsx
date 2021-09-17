import { EditorStyled, TextEditorStyled } from './editor-styled'

function Editor () {
  return (
    <EditorStyled>
      <TextEditor />
    </EditorStyled>
  )
}

function TextEditor() {
  return (
    <TextEditorStyled
      name=""
      id=""
      readOnly
      defaultValue={
        '## Bootcamp Brainn Co.\r\nLorem ipsum dolor sit amet simet'
      }
    />
  )
}

export { Editor }
