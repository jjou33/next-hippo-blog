import { FlexBox } from 'components/common/StyledLayout'
import PostCategoryList from 'components/posts/PostCategoryList'
import {
  getAllPostsCategory,
  getCategoryPosts,
  getSlugByParams,
} from 'utils/PostUtil'

const PostCategoryListPage = props => {
  return (
    <FlexBox flexDirection="column">
      <PostCategoryList posts={props.posts} />
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

export const getStaticPaths = async () => {
  const slugs = getSlugByParams()

  return {
    paths: slugs.map(([categoryId]) => ({
      params: { categoryId },
    })),
    fallback: false,
  }
}
