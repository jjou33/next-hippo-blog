// import AllPost from 'components/posts/AllPost'
import PostList from 'components/posts/PostList'
import { getAllNavList, getAllPosts } from 'utils/PostUtil'

const AllPostPage = props => {
  return <PostList posts={props.posts} isVertical={true} />
}

export function getStaticProps() {
  const allPosts = getAllPosts()
  const navList = getAllNavList()
  return {
    props: {
      posts: allPosts,
      navList: navList,
    },
  }
}

export default AllPostPage
