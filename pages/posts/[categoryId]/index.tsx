import { FlexBox } from 'components/common/StyledLayout'

import PostList from 'components/posts/PostList'
import {
  getAllPostsCategory,
  getCategoryPosts,
  getSlugByParams,
} from 'utils/PostUtil'

const PostCategoryListPage = props => {
  return (
    <FlexBox flexDirection="column">
      <PostList posts={props.posts} />
    </FlexBox>
  )
}

export default PostCategoryListPage

export const getStaticProps = async ({ params }) => {
  const categoryId = params.categoryId

  const postList = getCategoryPosts(categoryId)
  const category = getAllPostsCategory()
  return {
    props: {
      posts: postList,
      category,
    },
  }
}

export const getStaticPaths = () => {
  const slugs = getSlugByParams()

  return {
    paths: slugs.map(([categoryId]) => ({
      params: { categoryId },
    })),
    fallback: false,
  }
}
