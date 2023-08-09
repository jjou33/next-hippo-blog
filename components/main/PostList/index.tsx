import { Typography } from 'components/common'
import { Divider } from 'components/common/StyledLayout'
import theme from 'styles/theme'
import PostGrid from 'components/posts/PostGrid'
import * as S from './styles'
const PostList = props => {
  return (
    <S.PostListContainer>
      <Typography
        variant="h2"
        aggressive="headline_oneline_002"
        color={theme.colors.gray_007}
      >
        최신 포스트
      </Typography>
      <Divider
        direction="horizontal"
        width="100%"
        height="1px"
        margin="20px 0 16px 0"
        color={theme.colors.gray_002}
      />
      <PostGrid posts={props.posts} />
    </S.PostListContainer>
  )
}

export default PostList
