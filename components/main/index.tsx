import { FlexBox } from 'components/common/StyledLayout'
import HeroSection from './HeroSection'
import PostList from '../posts/PostList'
import ProjectSection from './ProjectSection'
import RecommendList from './RecommendSection'
import { MainIconSet } from 'public/static/icon/MainIcon'
import * as S from './styles'

const MainContents = props => {
  return (
    <FlexBox flexDirection="column" flex={4}>
      <HeroSection />
      <S.MainContainer>
        <S.WaveAnimationContainer>
          <S.WaveAnimationBox>{MainIconSet['Wave'].icon()}</S.WaveAnimationBox>
        </S.WaveAnimationContainer>
        <S.SectionContainer>
          <RecommendList />
          <ProjectSection />
          <PostList posts={props.posts} />
        </S.SectionContainer>
      </S.MainContainer>
    </FlexBox>
  )
}

export default MainContents
