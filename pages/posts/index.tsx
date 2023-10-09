import PostCategoryList from 'components/posts/PostCategoryList'
import { getAllPostsCategory, getAllPosts } from 'utils/PostUtil'

const AllPostPage = props => {
  return (
    <PostCategoryList
      posts={props.posts}
      keywords={props.category.keywordSet.AllKeywords}
    />
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts()
  const category = getAllPostsCategory()

  return {
    props: {
      posts: allPosts,
      category,
    },
  }
}

export default AllPostPage
