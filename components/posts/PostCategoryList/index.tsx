import * as S from './styles'

import theme from 'styles/theme'
import IconBox from 'components/common/IconBox'
import PostList from '../PostList'
import StyledDivider from 'components/common/Divider'
import PostListHeader from './PostListHeader'

import { Fragment } from 'react'
import { Typography } from 'components/common'
import { FlexBox } from 'components/common/StyledLayout'
import { NavigationIconSet } from 'public/static/icon'

import type { PostData } from 'types/post'

const PostCategoryList = ({
  posts,
  categoryId,
  keywords,
}: {
  posts: PostData[]
  categoryId?: string
  keywords?: string[]
}) => {
  return (
    <Fragment>
      <PostListHeader
        categoryId={categoryId}
        postInfo={posts}
        keywords={keywords ? keywords : []}
      />

      <S.PostCategoryContainer>
        <StyledDivider />
        <S.AllPostContainer>
          <FlexBox justifyContent="center" gap="0.5rem" alignItems="center">
            <IconBox width="43px" height="43px">
              {NavigationIconSet[
                `${categoryId ? categoryId : 'PostList'}`
              ].icon()}
            </IconBox>
            <Typography
              variant="h2"
              aggressive="headline_medium_001"
              color={theme.colors.primary_008}
              align="center"
            >
              {categoryId ? categoryId : '모든 포스트'}
            </Typography>
          </FlexBox>
          <Typography
            variant="p"
            aggressive="body_oneline_003"
            color={theme.colors.gray_006}
            align="center"
            margin="1rem 0 0 1rem"
          >
            {categoryId
              ? `${categoryId} 에 관련된 포스트를 모아봤어요!`
              : '최신순으로 모든 포스트가 개재되어 있어요!'}
          </Typography>
          <S.CustomDivider />
          <PostList posts={posts} />
        </S.AllPostContainer>
      </S.PostCategoryContainer>
    </Fragment>
  )
}

export default PostCategoryList
