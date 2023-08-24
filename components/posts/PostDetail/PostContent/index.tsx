import * as S from './styles'

import ReactMarkdown from 'react-markdown'

import { SubMaxContainer } from 'components/common/StyledLayout'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const PostContent = props => {
  const { posts } = props

  const imagePath = `/static/images/${posts.slug}/${posts.image}`

  const customRenderers = {
    p(paragraph) {
      const {
        node: { children },
      } = paragraph

      if (children[0].tagName === 'img') {
        const {
          properties: { alt, src },
        } = children[0]

        if (!src.includes('http')) {
          return (
            <S.StyledImage
              src={imagePath}
              alt={alt}
              width={0}
              height={0}
              sizes="100vw"
            />
          )
        }
      }

      return <p>{paragraph.children}</p>
    },

    code(code) {
      const { className, children } = code
      const language = className.split('-')[1]
      return (
        <SyntaxHighlighter style={atomDark} language={language}>
          {children}
        </SyntaxHighlighter>
      )
    },
  }

  return (
    <SubMaxContainer>
      <S.ContentsContainer>
        <ReactMarkdown components={customRenderers}>
          {posts.content}
        </ReactMarkdown>
      </S.ContentsContainer>
    </SubMaxContainer>
  )
}

export default PostContent
