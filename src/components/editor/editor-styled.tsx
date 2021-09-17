import styled from 'styled-components/macro'

const EditorStyled = styled.div`
  width: 40vw;
  padding: 0 10px 0 25px;
  border-right: 2px solid rgba(30, 41, 59, 0.12);
  margin: 0 0 15px 0;
`

const TextEditorStyled = styled.textarea`
  width: 100%;
  height: 100%;
  border: 0;
  outline: 0;
  resize: none;
  font-size: 18px;
  background-color: transparent;
`

export { EditorStyled, TextEditorStyled }
