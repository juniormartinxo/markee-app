import styled from 'styled-components/macro'

const EditorStyled = styled.div`
  width: 100%;
  padding: 0 10px 0 25px;
  margin: 0 0 15px 0;
  min-height: 300px;

  @media (min-width: 600px) {
    border-right: 2px solid rgba(30, 41, 59, 0.12);
  }

  @media (max-width: 599px) {
    border-bottom: 2px solid rgba(30, 41, 59, 0.12);
  }
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
