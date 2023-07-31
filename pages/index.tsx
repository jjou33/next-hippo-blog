import FeaturePosts from 'components/home-page/featured-posts'
import Hero from 'components/home-page/hero'
import { StyledLayout } from 'components/shared'
import { getFeaturedPosts } from 'lib/post-util'

const Homepage = props => {
  console.log(props)

  return (
    <StyledLayout.FlexBox flexDirection="column" alignItems="center">
      <StyledLayout.FlexBox
        justifyContent="center"
        gap="78px"
        width="100%"
        margin="0 auto"
        padding="80px 0 0 0"
        background="linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #F9F9FB 100%)"
      ></StyledLayout.FlexBox>
    </StyledLayout.FlexBox>
    // <>
    //   <Hero />
    //   <FeaturePosts posts={props.posts} />
    // </>
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
