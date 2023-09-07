import * as S from './styles'

import VerticalGrid from './VerticalGrid'
import HorizontalGrid from './HorizontalGrid'

import type { PostData } from 'types/post'

interface PostListProps {
  posts: PostData[]
  isMain?: boolean
  isVertical?: boolean
}
const PostList = ({ posts, isMain, isVertical }: PostListProps) => {
  const postList = isMain ? posts.slice(0, 6) : posts
  return (
    <S.PostListContainer>
      {isVertical ? (
        <VerticalGrid posts={postList} />
      ) : (
        <HorizontalGrid posts={postList} />
      )}
    </S.PostListContainer>
  )
}

export default PostList
