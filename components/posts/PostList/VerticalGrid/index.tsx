import * as S from './styles'
import VerticalItem from 'components/posts/PostList/VerticalGrid/VerticalItem'

const VerticalGrid = props => {
  const { posts } = props

  return (
    <S.GridContainer>
      {posts.map((post, index) => (
        <VerticalItem key={post.slug} post={post} index={index} />
      ))}
    </S.GridContainer>
  )
}

export default VerticalGrid
