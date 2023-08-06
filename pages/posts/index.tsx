import AllPost from 'components/posts/AllPost'
import { getAllPosts } from 'lib/PostUtil'

const AllPostPage = props => {
  return <AllPost posts={props.posts} />
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
