import PostItem from 'components/posts/PostItem'
import AllPostItem from '../AllPostItem'
import * as S from './styles'
const AllPostGrid = ({ posts }) => {
  return (
    <S.GridContainer>
      {posts.map(post => (
        <AllPostItem key={post.slug} post={post} />
      ))}
    </S.GridContainer>
  )
}

export default AllPostGrid
