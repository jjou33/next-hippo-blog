import * as S from './styles'
import PostList from '../PostList'
import PostListHeader from './PostListHeader'
import WaveAnimation from 'components/common/WaveAnimation'
import IconBox from 'components/common/IconBox'
import theme from 'styles/theme'
import { Typography } from 'components/common'
import { FlexBox } from 'components/common/StyledLayout'
import { useRouter } from 'next/router'
import { NavigationIconSet } from 'public/static/icon'

const PostCategoryList = props => {
  const {
    query: { categoryId },
  } = useRouter()

  return (
    <>
      <PostListHeader
        categoryId={categoryId}
        mainCategory={props.posts[0].category1depth}
      />
      <S.PostCategoryContainer>
        <WaveAnimation />
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
          <PostList posts={props.posts} />
        </S.AllPostContainer>
      </S.PostCategoryContainer>
    </>
  )
}

export default PostCategoryList
