import { WaveAnimation } from 'components/common'
import { FlexBox } from 'components/common/StyledLayout'
import type { PostData } from 'types/post'
import * as S from './styles'

import HeroSection from './HeroSection'
import IntroSection from './IntroSection'
import ProjectSection from './ProjectSection'
import RecommendList from './RecommendSection'
import PostListSection from './PostListSection'

const MainContents = ({ posts }: { posts: PostData[] }) => {
  return (
    <FlexBox flexDirection={'column'}>
      <HeroSection />
      <S.MainContainer>
        <WaveAnimation />
        <S.SectionContainer>
          <IntroSection />
          <RecommendList />
          <ProjectSection />
          <PostListSection posts={posts} />
        </S.SectionContainer>
      </S.MainContainer>
    </FlexBox>
  )
}

export default MainContents
