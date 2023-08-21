import MainSection from 'components/main'
import { Fragment } from 'react'
import { Header } from 'components/common'
import { getAllPosts, getAllPostsCategory } from 'utils/PostUtil'

const RootPage = props => {
  return (
    <Fragment>
      <Header />
      <MainSection posts={props.posts} />
    </Fragment>
  )
}

export function getStaticProps() {
  const allPosts = getAllPosts()
  const category = getAllPostsCategory()

  return {
    props: {
      posts: allPosts,
      category,
    },
  }
}

export default RootPage
