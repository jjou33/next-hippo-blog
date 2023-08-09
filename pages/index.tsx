import MainSection from 'components/main'
import { Fragment } from 'react'
import { getFeaturedPosts } from 'lib/PostUtil'
import { FlexBox } from 'components/common/StyledLayout'
import SideBar from 'components/sidebar'

const RootPage = props => {
  return (
    <Fragment>
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
