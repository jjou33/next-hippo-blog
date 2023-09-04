import PostDetail from 'components/posts/PostDetail'
import {
  getAllPostsCategory,
  getPostData,
  getSlugByParams,
} from 'utils/PostUtil'

const PostDetailPage = props => {
  return <PostDetail posts={props.post} />
}

export default PostDetailPage

export const getStaticProps = async ({ params: { categoryId, postId } }) => {
  const postData = getPostData(`${categoryId}/${postId}`)
  const category = getAllPostsCategory()
  return {
    props: {
      post: postData,
      category,
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
