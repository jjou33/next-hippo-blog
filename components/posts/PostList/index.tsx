import { Typography } from 'components/common'
import { Divider } from 'components/common/StyledLayout'
import theme from 'styles/theme'
import * as S from './styles'

import HorizonGrid from './HorizonGrid'
import VerticalGrid from './VerticalGrid'
const PostList = props => {
  return (
    <S.PostListContainer>
      {props.isVertical ? (
        <S.AllPostContainer>
          <Typography variant="h1" aggressive="headline_oneline_001">
            {`${props.rootCategory}/${props.category1depth}/${props.category2depth}`}
          </Typography>
          <Divider
            direction="horizontal"
            width="100%"
            height="1px"
            margin="20px 0 16px 0"
            color={theme.colors.gray_002}
          />
          <VerticalGrid posts={props.posts} />
        </S.AllPostContainer>
      ) : (
        <S.PostListContainer>
          <Typography
            variant="h2"
            aggressive="headline_oneline_002"
            color={theme.colors.gray_007}
          >
            {`🧑🏼‍💻 ${props.rootCategory}/${props.category1depth}/${props.category2depth}`}
          </Typography>
          <Divider
            direction="horizontal"
            width="100%"
            height="1px"
            margin="20px 0 16px 0"
            color={theme.colors.gray_002}
          />
          <HorizonGrid posts={props.posts} />
        </S.PostListContainer>
      )}
      {/* <PostGrid posts={props.posts} /> */}
    </S.PostListContainer>
  )
}

export default PostList
