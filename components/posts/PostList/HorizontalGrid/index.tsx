import VerticalItem from './HorizontalItem'
import * as S from './styles'
const HorizontalGrid = ({ posts }) => {
  return (
    <S.GridContainer>
      {posts.map(post => (
        <VerticalItem key={post.slug} post={post} />
      ))}
    </S.GridContainer>
  )
}

export default HorizontalGrid
