import ViewerStyled from './viewer-styled'
import marked from 'marked'

/**
 * Importa os estilos do highlight.js
 */
import 'highlight.js/styles/vs.css'

import('highlight.js').then((hljs) => {
  const HLJS = hljs.default

  /**
   * Seta as configurações do highlight.js no marked.
   */
  marked.setOptions({
    highlight: (code: string, language: string) => {
      if (language && HLJS.getLanguage(language)) {
        return HLJS.highlight(language, code).value
      }
      return HLJS.highlightAuto(code).value
    },
  })
})

type ViewerProps = {
  mkdText: string
}

/**
 * Componente Viewer - permite a visualização de um texto em markdown.
 *
 * @param mkdText Texto em markdown a ser visualizado.
 * @returns JSX
 */
function Viewer({ mkdText }: ViewerProps) {
  return <ViewerStyled dangerouslySetInnerHTML={{ __html: marked(mkdText) }} />
}

export { Viewer }
