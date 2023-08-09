// import AllPost from 'components/posts/AllPost'
import PostList from 'components/posts/PostList'
import { getAllPosts } from 'lib/PostUtil'

const AllPostPage = props => {
  return <PostList posts={props.posts} isVertical={true} />
}

export function getStaticProps() {
  const allPosts = getAllPosts()

  return {
    props: {
      posts: allPosts,
    },
  }
}

export default AllPostPage
