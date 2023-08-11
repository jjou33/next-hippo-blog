import MainSection from 'components/main'
import { Fragment } from 'react'
import { getFeaturedPosts } from 'utils/PostUtil'
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
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts,
    },
  }
}

export default RootPage
