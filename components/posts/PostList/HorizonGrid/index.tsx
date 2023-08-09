import * as S from './styles'
import HorizonItem from 'components/posts/PostList/HorizonGrid/HorizonItem'

const HorizonGrid = props => {
  const { posts } = props

  return (
    <S.GridContainer>
      {posts.map(post => (
        <HorizonItem key={post.slug} post={post} />
      ))}
    </S.GridContainer>
  )
}

export default HorizonGrid
