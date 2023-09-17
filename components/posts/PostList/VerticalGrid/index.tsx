import * as S from './styles'

import VerticalItem from 'components/posts/PostList/VerticalGrid/VerticalItem'

import type { PostData } from 'types/post'

const VerticalGrid = ({ posts }: { posts: PostData[] }) => {
  return (
    <S.GridContainer>
      {posts.map((post, index) => (
        <VerticalItem key={post.slug} posts={post} index={index} />
      ))}
    </S.GridContainer>
  )
}

export default VerticalGrid
