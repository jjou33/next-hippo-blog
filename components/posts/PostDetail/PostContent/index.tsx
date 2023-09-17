import * as S from './styles'

import ReactMarkdown from 'react-markdown'
import PostToc from 'components/posts/PostToc'

import { MainIconSet } from 'public/static/icon'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import type { PostData } from 'types/post'

const PostContent = ({
  postDetailInfo: { category1depth, category2depth, content, image },
}: {
  postDetailInfo: PostData
}) => {
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
              src={`/static/images/${category1depth}/${category2depth}/${image}`}
              alt={alt}
              width={0}
              height={0}
              sizes="100%"
            />
          )
        }
      }

      return <p>{paragraph.children}</p>
    },
    code(code) {
      const { className, children } = code
      let language = ''
      language = className.split('-')[1]

      return (
        <SyntaxHighlighter style={nightOwl} language={language}>
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
        <PostToc />
        <S.StyledDivider>
          <hr />
        </S.StyledDivider>
        <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
      </S.ContentsWrapper>
    </S.ContentsContainer>
  )
}

export default PostContent
