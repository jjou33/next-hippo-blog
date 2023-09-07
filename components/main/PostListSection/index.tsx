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
          aggressive="headline_medium_002"
          color={theme.colors.gray_007}
        >
          🧑🏻‍💻 모든 포스트
        </Typography>
        <Typography
          variant="h2"
          aggressive="body_oneline_003"
          color={theme.colors.gray_004}
          margin="1rem 0 0 0"
        >
          최신 순으로 모든 게시물을 만나보세요!
        </Typography>
        <Divider
          direction="horizontal"
          width="100%"
          height="1px"
          margin="20px 0 0 0"
          color={theme.colors.gray_002}
        />
        <PostList posts={props.posts} isMain={true} isVertical={true} />
        <S.ReadMoreBtnWrapper>
          <S.ReadMoreBtn href={'/posts'}>
            <Typography
              variant="span"
              aggressive="montserratAlternates_Bold_003"
            >
              {'Read More Contents..'}
            </Typography>
          </S.ReadMoreBtn>
        </S.ReadMoreBtnWrapper>
      </S.AllPostContainer>
    </S.PostListContainer>
  )
}

export default PostListSection
