import type { PostData } from 'types/post'
import * as S from './styles'

import VerticalItem from './HorizontalItem'

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
