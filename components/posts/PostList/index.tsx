import * as S from './styles'

import HorizonGrid from './HorizonGrid'
import VerticalGrid from './VerticalGrid'

const PostList = props => {
  return (
    <S.PostListContainer>
      {props.isVertical ? (
        <VerticalGrid posts={props.posts} />
      ) : (
        <HorizonGrid posts={props.posts} />
      )}
    </S.PostListContainer>
  )
}

export default PostList
