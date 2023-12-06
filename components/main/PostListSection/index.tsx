import * as S from './styles'

import DATA from 'constants/data'
import PostList from 'components/posts/PostList'
import Link from 'next/link'
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
        <Link href={`/posts?page=1`} aria-label={'Go To All Post Page'}>
          <S.ReadMoreBtnWrapper>
            <S.Button>
              <Typography variant="span" aggressive="body_oneline_001">
                🚀 MORE POSTS
              </Typography>
            </S.Button>
          </S.ReadMoreBtnWrapper>
        </Link>
      </S.AllPostContainer>
    </S.PostListContainer>
  )
}

export default PostListSection
