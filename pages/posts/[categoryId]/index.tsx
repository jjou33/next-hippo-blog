import PostList from 'components/posts/PostList'
import { getAllNavList, getCategoryPosts } from 'utils/PostUtil'

const PostCategoryListPage = props => {
  return <PostList posts={props.posts} />
}

export default PostCategoryListPage

export const getServerSideProps = async ({ params }) => {
  const categoryId = params.categoryId

  const postList = getCategoryPosts(categoryId)
  const navList = getAllNavList()
  return {
    props: {
      posts: postList,
      navList: navList,
    },
  }
}
