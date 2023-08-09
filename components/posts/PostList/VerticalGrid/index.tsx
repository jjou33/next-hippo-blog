import VerticalItem from './VerticalItem'
import * as S from './styles'
const VerticalGrid = ({ posts }) => {
  return (
    <S.GridContainer>
      {posts.map(post => (
        <VerticalItem key={post.slug} post={post} />
      ))}
    </S.GridContainer>
  )
}

export default VerticalGrid
