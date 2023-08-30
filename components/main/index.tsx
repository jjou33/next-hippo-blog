import * as S from './styles'

import HeroSection from './HeroSection'
import ProjectSection from './ProjectSection'
import RecommendList from './RecommendSection'

import { FlexBox } from 'components/common/StyledLayout'
import { MainIconSet } from 'public/static/icon/MainIcon'

import type { PostData } from 'types/post'
import PostListSection from './PostListSection'

const MainContents = ({ posts }: { posts: PostData[] }) => {
  return (
    <FlexBox flexDirection="column">
      <HeroSection />
      <S.MainContainer>
        <S.WaveAnimationContainer>
          <S.WaveAnimationBox>{MainIconSet['Wave'].icon()}</S.WaveAnimationBox>
        </S.WaveAnimationContainer>
        <S.SectionContainer>
          <RecommendList />
          <ProjectSection />
          <PostListSection posts={posts} />
          {/* <PostList posts={posts} /> */}
        </S.SectionContainer>
      </S.MainContainer>
    </FlexBox>
  )
}

export default MainContents
