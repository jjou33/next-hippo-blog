import * as S from './styles'
import PostList from '../PostList'
import PostListHeader from './PostListHeader'
import WaveAnimation from 'components/common/WaveAnimation'

const PostCategoryList = props => {
  console.log('props1 : ', props)
  return (
    <>
      <PostListHeader posts={props.posts} />
      <S.PostCategoryContainer>
        <WaveAnimation />
        <PostList posts={props.posts} />
      </S.PostCategoryContainer>
    </>
  )
}

export default PostCategoryList
