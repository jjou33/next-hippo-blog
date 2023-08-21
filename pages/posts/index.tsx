// import AllPost from 'components/posts/AllPost'
import PostList from 'components/posts/PostList'
import { getAllPostsCategory, getAllPosts } from 'utils/PostUtil'

const AllPostPage = props => {
  return <PostList posts={props.posts} isVertical={true} />
}

export function getStaticProps() {
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
