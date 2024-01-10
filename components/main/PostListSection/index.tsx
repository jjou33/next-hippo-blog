import DATA from 'constants/data'
import PostList from 'components/posts/PostList'
import Link from 'next/link'
import { Typography } from 'components/common'
import SectionHeader from '../SectionHeader'

import * as S from './styles'

const PostListSection = ({ posts }) => {
  return (
    <S.PostListContainer>
      <S.AllPostContainer>
        <S.HeaderTextWrapper>
          <SectionHeader
            title={DATA.POST_LIST_INFO.HEADER.TITLE}
            subTitle={DATA.POST_LIST_INFO.HEADER.SUB_TITLE}
          />
        </S.HeaderTextWrapper>
        <PostList posts={posts} isMain />
        <Link href={`/posts?page=1`} aria-label={'MORE POSTS'}>
          <S.ReadMoreBtnWrapper>
            <S.Button>
              <Typography variant={'span'} aggressive={'body_oneline_001'}>
                {'🚀 MORE POSTS'}
              </Typography>
            </S.Button>
          </S.ReadMoreBtnWrapper>
        </Link>
      </S.AllPostContainer>
    </S.PostListContainer>
  )
}

export default PostListSection
