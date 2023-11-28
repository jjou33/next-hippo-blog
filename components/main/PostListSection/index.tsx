import * as S from './styles'

import DATA from 'constants/data'
import PostList from 'components/posts/PostList'
import SectionHeader from '../SectionHeader'

import { Typography } from 'components/common'
import { useRouter } from 'next/router'

const PostListSection = props => {
  const router = useRouter()
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
          <S.ReadMoreBtn
            onClick={() => {
              router.push(
                {
                  pathname: '/posts',
                  query: { page: 1 },
                },
                undefined,
              )
            }}
          >
            <Typography variant="span" aggressive="body_oneline_002">
              {'Read More Contents..'}
            </Typography>
          </S.ReadMoreBtn>
        </S.ReadMoreBtnWrapper>
      </S.AllPostContainer>
    </S.PostListContainer>
  )
}

export default PostListSection
