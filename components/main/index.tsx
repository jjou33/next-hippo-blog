import { FlexBox } from 'components/common/StyledLayout'
import HeroSection from './HeroSection'
import PostList from '../posts/PostList'
import ProjectSection from './ProjectSection'
import RecommendList from './RecommendSection'
import * as S from './styles'

const MainContents = props => {
  return (
    <FlexBox flexDirection="column" flex={4}>
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
    </FlexBox>
  )
}

export default MainContents
