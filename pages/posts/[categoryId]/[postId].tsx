import PostDetail from 'components/posts/PostDetail'
import { getAllNavList, getPostData, getSlugByParams } from 'utils/PostUtil'

const PostDetailPage = props => {
  return <PostDetail posts={props.post} />
}

export default PostDetailPage

export const getStaticProps = context => {
  const { params } = context
  const { postId } = params
  const postData = getPostData(postId)
  const navList = getAllNavList()
  return {
    props: {
      post: postData,
      navList: navList,
    },
    revalidate: 600,
  }
}

export const getStaticPaths = () => {
  const slugs = getSlugByParams()

  return {
    paths: slugs.map(([categoryId, postId]) => ({
      params: { categoryId, postId },
    })),
    fallback: false,
  }
}
