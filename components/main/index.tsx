import { FlexBox } from 'components/common/StyledLayout'
import HeroSection from './HeroSection'
import PostList from './PostList'
import ProjectSection from './ProjectSection'
import RecommendList from './Recommend'
const MainImageSection = props => {
  return (
    <FlexBox flexDirection="column" alignItems="center" gap="5rem">
      <HeroSection />
      <RecommendList />
      <ProjectSection />
      <PostList posts={props.posts} />
    </FlexBox>
  )
}

export default MainImageSection
