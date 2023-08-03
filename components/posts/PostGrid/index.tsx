import * as S from './styles'
import PostItem from '../PostItem'

const PostGrid = props => {
  console.log('props : ', props)
  const { posts } = props

  return (
    <S.GridContainer>
      {posts.map(post => (
        <PostItem key={post.slug} post={post} />
      ))}
    </S.GridContainer>
  )
}

export default PostGrid
