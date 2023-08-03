import { getFeaturedPosts } from 'lib/PostUtil'
import MainSection from 'components/main'
const Homepage = props => {
  return (
    <>
      <MainSection posts={props.posts} />
    </>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts,
    },
  }
}

export default Homepage
