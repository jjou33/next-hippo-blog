import AllPost from 'components/posts/AllPost'
import { getFeaturedPosts } from 'lib/PostUtil'

const AllPostPage = () => {
  return <AllPost posts={props.posts} />
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts,
    },
  }
}
export default AllPostPage
