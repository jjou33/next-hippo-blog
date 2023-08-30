import * as S from './styles'

import PostList from 'components/posts/PostList'
import theme from 'styles/theme'

import { Typography } from 'components/common'
import { Divider } from 'components/common/StyledLayout'
const PostListSection = props => {
  return (
    <S.PostListContainer>
      <S.AllPostContainer>
        <Typography
          variant="h2"
          aggressive="headline_oneline_002"
          color={theme.colors.gray_007}
        >
          🧑🏻‍💻 모든 포스트
        </Typography>
        <Divider
          direction="horizontal"
          width="100%"
          height="1px"
          margin="20px 0 16px 0"
          color={theme.colors.gray_002}
        />
        <PostList posts={props.posts} />
      </S.AllPostContainer>
    </S.PostListContainer>
  )
}

export default PostListSection
