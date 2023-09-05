import { MainIconSet } from 'public/static/icon'
import * as S from './styles'

import ReactMarkdown from 'react-markdown'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const PostContent = props => {
  const { posts } = props

  const imagePath = `/static/images/${posts.category1depth}/${posts.image}`

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
    <S.ContentsContainer>
      <S.WaveAnimationContainer>
        <S.WaveAnimationBox>{MainIconSet['Wave'].icon()}</S.WaveAnimationBox>
      </S.WaveAnimationContainer>
      <S.ContentsWrapper>
        <ReactMarkdown components={customRenderers}>
          {posts.content}
        </ReactMarkdown>
      </S.ContentsWrapper>
    </S.ContentsContainer>
  )
}

export default PostContent
