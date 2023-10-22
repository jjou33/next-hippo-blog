import * as S from './styles'

import DATA from 'constants/data'
import PostList from 'components/posts/PostList'
import SectionHeader from '../SectionHeader'

import { Typography } from 'components/common'

const PostListSection = props => {
  return (
    <S.PostListContainer>
      <S.AllPostContainer>
        <S.HeaderTextWrapper>
          <SectionHeader
            title={DATA.POST_LIST_INFO.HEADER.TITLE}
            subTitle={DATA.POST_LIST_INFO.HEADER.SUB_TITLE}
          />
        </S.HeaderTextWrapper>
        <PostList posts={props.posts} isMain={true} />
        <S.ReadMoreBtnWrapper>
          <S.ReadMoreBtn href={'/posts'}>
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
