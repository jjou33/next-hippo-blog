import * as S from './styles'

import VerticalItem from './HorizontalItem'

import type { PostData } from 'types/post'
const HorizontalGrid = ({ posts }: { posts: PostData[] }) => {
  return (
    <S.GridContainer>
      {posts.map(post => (
        <VerticalItem key={post.slug} posts={post} />
      ))}
    </S.GridContainer>
  )
}

export default HorizontalGrid
