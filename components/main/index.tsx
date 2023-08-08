import { FlexBox } from 'components/common/StyledLayout'
import HeroSection from './HeroSection'
import PostList from './PostList'
import ProjectSection from './ProjectSection'
import RecommendList from './Recommend'
import * as S from './styles'
const MainImageSection = props => {
  return (
    <>
      <HeroSection />
      <S.MainContainer>
        <FlexBox justifyContent="center">
          <S.IndicatorContainer>
            <S.MouseIndicatorWrapper>
              <S.MouseIndicator />
            </S.MouseIndicatorWrapper>
          </S.IndicatorContainer>
        </FlexBox>
        <RecommendList />
        <ProjectSection />
        <PostList posts={props.posts} />
      </S.MainContainer>
    </>
  )
}

export default MainImageSection
