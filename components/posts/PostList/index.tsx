import { Typography } from 'components/common'
import { Divider } from 'components/common/StyledLayout'
import theme from 'styles/theme'
import * as S from './styles'

import HorizonGrid from './HorizonGrid'
import VerticalGrid from './VerticalGrid'

const PostList = props => {
  const imagePath = `/static/images/heroBackground.gif`
  return (
    <S.PostListContainer>
      {props.isVertical ? (
        // <S.AllPostContainer>
        <VerticalGrid posts={props.posts} />
      ) : (
        // </S.AllPostContainer>
        // <S.AllPostContainer>
        <HorizonGrid posts={props.posts} />
        // </S.AllPostContainer>
      )}
    </S.PostListContainer>
  )
}

export default PostList
