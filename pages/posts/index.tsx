import AllPosts from 'components/posts/all-posts'
import { getAllPosts } from 'lib/post-util'

const AllPostPage = props => {
  return <AllPosts posts={props.posts} />
}

export const getStaticProps = () => {
  const allPosts = getAllPosts()

  return {
    props: {
      posts: allPosts,
    },
  }
}
export default AllPostPage
