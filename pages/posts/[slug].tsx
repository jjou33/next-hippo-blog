import PostContent from 'components/posts/PostDetail/PostContent'
import { getPostsFiles, getPostData } from 'lib/PostUtil'
const PostDetailPage = props => {
  return <PostContent posts={props.posts} />
}

export function getStaticProps(context) {
  const { params } = context
  const { slug } = params

  const postData = getPostData(slug)

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  }
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles()

  const slugs = postFilenames.map(fileName => fileName.replace(/\.md$/, ''))

  return {
    paths: slugs.map(slug => ({ params: { slug: slug } })),
    fallback: false,
  }
}
export default PostDetailPage
