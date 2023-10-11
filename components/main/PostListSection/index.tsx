import * as S from './styles'

import PostList from 'components/posts/PostList'
import SectionHeader from '../SectionHeader'

import { Typography } from 'components/common'

const PostListSection = props => {
  return (
    <S.PostListContainer>
      <S.AllPostContainer>
        <S.HeaderTextWrapper>
          <SectionHeader
            title={'🧑🏻‍💻 모든 포스트'}
            subTitle={'최신 순으로 모든 게시물을 만나보세요!'}
          />
        </S.HeaderTextWrapper>
        <PostList posts={props.posts} isMain={true} />
        <S.ReadMoreBtnWrapper>
          <S.ReadMoreBtn href={'/posts?page=1'}>
            <Typography variant="span" aggressive="body_oneline_005">
              {'Read More Contents..'}
            </Typography>
          </S.ReadMoreBtn>
        </S.ReadMoreBtnWrapper>
      </S.AllPostContainer>
    </S.PostListContainer>
  )
}

export default PostListSection
