import * as S from './styles'
import PostList from '../PostList'
import PostListHeader from './PostListHeader'
import WaveAnimation from 'components/common/WaveAnimation'
import { Typography } from 'components/common'
import theme from 'styles/theme'
import { Divider, FlexBox } from 'components/common/StyledLayout'
import { useRouter } from 'next/router'
import IconBox from 'components/common/IconBox'
import { NavigationIconSet } from 'public/static/icon'

const PostCategoryList = props => {
  const { query } = useRouter()

  return (
    <>
      <PostListHeader
        categoryId={query.categoryId}
        mainCategory={props.posts[0].category1depth}
      />
      <S.PostCategoryContainer>
        <WaveAnimation />
        <S.AllPostContainer>
          <FlexBox justifyContent="center" gap="0.5rem" alignItems="center">
            <IconBox width="43px" height="43px">
              {NavigationIconSet[`${query.categoryId}`].icon()}
            </IconBox>
            <Typography
              variant="h2"
              aggressive="headline_oneline_002"
              color={theme.colors.primary_008}
              align="center"
            >
              {query.categoryId}
            </Typography>
          </FlexBox>
          <S.CustomDivider />
          {/* <Divider
            direction="horizontal"
            width="50%"
            height="1px"
            margin="2rem auto 5rem "
            color={theme.colors.gray_002}
          /> */}
          <PostList posts={props.posts} />
        </S.AllPostContainer>
      </S.PostCategoryContainer>
    </>
  )
}

export default PostCategoryList
