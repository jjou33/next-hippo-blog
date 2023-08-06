import { FlexBox } from 'components/common/StyledLayout'
import HeroSection from './HeroSection'
import PostList from './PostList'

const MainImageSection = props => {
  return (
    <FlexBox flexDirection="column" alignItems="center">
      <HeroSection />
      <PostList posts={props.posts} />
    </FlexBox>
  )
}

export default MainImageSection
