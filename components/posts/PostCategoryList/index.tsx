import * as S from './styles'
import PostList from '../PostList'
import PostListHeader from './PostListHeader'
import WaveAnimation from 'components/common/WaveAnimation'
import { Typography } from 'components/common'
import theme from 'styles/theme'
import { FlexBox } from 'components/common/StyledLayout'
import { useRouter } from 'next/router'
import IconBox from 'components/common/IconBox'
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
              aggressive="headline_oneline_002"
              color={theme.colors.primary_008}
              align="center"
            >
              {categoryId ? categoryId : '모든 포스트'}
            </Typography>
          </FlexBox>
          <S.CustomDivider />
          <PostList posts={props.posts} />
        </S.AllPostContainer>
      </S.PostCategoryContainer>
    </>
  )
}

export default PostCategoryList
