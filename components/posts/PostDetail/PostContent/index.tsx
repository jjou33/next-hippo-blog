import ReactMarkdown from 'react-markdown'
import PostToc from 'components/posts/PostToc'

import { WaveAnimation } from 'components/common'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import type { PostData } from 'types/post'
import * as S from './styles'

const PostContent = ({
  postDetailInfo: { content },
}: {
  postDetailInfo: PostData
}) => {
  const customRenderers = {
    img({ ...props }) {
      return (
        <S.StyledImage
          src={`${props.src}`}
          alt={props.alt}
          width={0}
          height={0}
          sizes={'100%'}
          priority
        />
      )
    },
    code(code) {
      const { className, children } = code
      const language = className.split('-')[1]

      return (
        <SyntaxHighlighter style={nightOwl} language={language}>
          {children}
        </SyntaxHighlighter>
      )
    },
  }

  return (
    <S.ContentsContainer>
      <WaveAnimation />
      <S.ContentsWrapper>
        <PostToc />
        <S.StyledDivider>
          <hr />
        </S.StyledDivider>
        <S.MarkdownWrapper>
          <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
        </S.MarkdownWrapper>
      </S.ContentsWrapper>
    </S.ContentsContainer>
  )
}

export default PostContent
