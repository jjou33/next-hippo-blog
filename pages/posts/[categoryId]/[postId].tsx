import PostDetail from 'components/posts/PostDetail'
import {
  getAllPostsCategory,
  getPostData,
  getSlugByParams,
} from 'utils/PostUtil'

const PostDetailPage = props => {
  return <PostDetail posts={props.posts} />
  // return <></>
}

export default PostDetailPage

export const getStaticProps = async ({ params: { categoryId, postId } }) => {
  const postData = getPostData(`${categoryId}/${postId}`)
  const category = getAllPostsCategory()

  return {
    props: {
      posts: postData,
      category,
    },
  }
}

export const getStaticPaths = async () => {
  const slugs = getSlugByParams()

  return {
    paths: slugs.map(([categoryId, postId]) => ({
      params: { categoryId, postId },
    })),
    fallback: false,
  }
}
