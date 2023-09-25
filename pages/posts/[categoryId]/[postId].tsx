import PostDetail from 'components/posts/PostDetail'
import {
  getAllPostsCategory,
  getPostData,
  getSlugByParams,
} from 'utils/PostUtil'

import type { PostData } from 'types/post'

const PostDetailPage = ({ postDetailInfo }: { postDetailInfo: PostData }) => {
  return <PostDetail postDetailInfo={postDetailInfo} />
}

export default PostDetailPage

export const getStaticProps = async ({ params: { categoryId, postId } }) => {
  const postData = getPostData(`${categoryId}/${postId}`)
  const category = getAllPostsCategory()

  return {
    props: {
      postDetailInfo: postData,
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
