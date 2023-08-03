import { Typography } from 'components/common'
import { FlexBox, Divider } from 'components/common/StyledLayout'
import theme from 'styles/theme'
import PostGrid from 'components/posts/PostGrid'
const PostList = props => {
  return (
    <FlexBox flexDirection="column" width="996px" margin="64px 0 0 0">
      <Typography
        variant="h2"
        aggressive="headline_oneline_002"
        color={theme.colors.gray_007}
      >
        최신 포스트
      </Typography>
      <Divider
        direction="horizontal"
        width="996px"
        height="1px"
        margin="20px 0 16px 0"
        color={theme.colors.gray_002}
      />
      <PostGrid posts={props.posts} />
    </FlexBox>
  )
}

export default PostList
