import FeaturePosts from 'components/home-page/featured-posts'
import MainImageSection from 'components/MainImageSection'
import { getFeaturedPosts } from 'lib/post-util'
import { FlexBox } from 'components/common/StyledLayout'
const Homepage = props => {
  console.log(props)
  return (
    <>
      <MainImageSection />
      <FeaturePosts posts={props.posts} />
    </>
  )
}

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts,
    },
  }
}
export default Homepage
