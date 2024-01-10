import { IconBox, Typography, WaveAnimation } from 'components/common'
import { Fragment } from 'react'
import { NavigationIconSet } from 'public/static/icon'
import theme from 'styles/theme'

import type { PostData } from 'types/post'
import PostList from '../PostList'
import PostListHeader from './PostListHeader'
import * as S from './styles'

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
    <>
      <PostListHeader
        categoryId={categoryId}
        postInfo={posts}
        keywords={keywords || []}
      />

      <S.PostCategoryContainer>
        <WaveAnimation />
        <S.AllPostContainer>
          <S.TextBoxContainer
            justifyContent={'center'}
            gap={'0.5rem'}
            alignItems={'center'}
          >
            <IconBox width={'43px'} height={'43px'}>
              {NavigationIconSet[
                `${categoryId ? categoryId.toLowerCase() : 'PostList'}`
              ].icon()}
            </IconBox>
            <Typography
              variant={'h2'}
              aggressive={'headline_medium_001'}
              color={theme.color.primary_008}
              align={'center'}
            >
              {categoryId ? categoryId.toUpperCase() : '모든 포스트'}
            </Typography>
          </S.TextBoxContainer>
          <Typography
            variant={'p'}
            aggressive={'body_oneline_002'}
            color={theme.color.text_001}
            align={'center'}
            margin={'1rem 0 0 1rem'}
          >
            {categoryId
              ? `${categoryId.toUpperCase()} 에 관련된 포스트를 모아봤어요!`
              : '최신순으로 모든 포스트가 개재되어 있어요!'}
          </Typography>
          <S.CustomDivider />
          <PostList posts={posts} isAllPost={!categoryId} />
        </S.AllPostContainer>
      </S.PostCategoryContainer>
    </>
  )
}

export default PostCategoryList
