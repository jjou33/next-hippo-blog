import MainSection from 'components/main'
import { Fragment } from 'react'
import { getAllPosts, getAllNavList } from 'utils/PostUtil'
import { Header } from 'components/common'

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
  const navList = getAllNavList()
  return {
    props: {
      posts: allPosts,
      navList: navList,
    },
  }
}

export default RootPage
