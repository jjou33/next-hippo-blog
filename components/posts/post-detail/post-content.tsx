import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import PostHeader from './post-header'
import classes from './post-content.module.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
const PostContent = props => {
  const { post } = props
  const imagePath = `/images/posts/${post.slug}/${post.image}`

  // Image Override
  // react-markdown 에서 md 파일에 작성된
  // 기존 Img 태그를 next/Image 를 활용하여 최적화 하여 사용하기 위함

  const customRenderers = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   )
    // },
    p(paragraph) {
      const { node } = paragraph
      // tagName 이 img 인 경우만 Override 를 진행하고 나머지의 경우에는 그냥 노출시킨다.
      if (node.children[0].tagName === 'img') {
        const image = node.children[0]

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        )
      }

      return <p>{paragraph.children}</p>
    },

    code(code) {
      const { className, children } = code
      const language = className.split('-')[1] // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      )
    },
  }
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent
