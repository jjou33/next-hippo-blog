import { FlexBox } from 'components/common/StyledLayout'
import HeroSection from './HeroSection'
import PostList from './PostList'
const MainImageSection = () => {
  return (
    <FlexBox flexDirection="column" alignItems="center">
      <HeroSection />
      <PostList />
    </FlexBox>
  )
}

export default MainImageSection
