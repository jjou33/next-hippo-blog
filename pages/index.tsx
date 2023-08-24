import MainSection from 'components/main'

import { Fragment } from 'react'
import { Header } from 'components/common'
import { getAllPosts, getAllPostsCategory } from 'utils/PostUtil'

import type { AllPostCategory, PostData } from 'types/post'

interface RootProps {
  posts: PostData[]
  category: AllPostCategory
}

const RootPage = (props: RootProps) => {
  return (
    <Fragment>
      <Header />
      <MainSection posts={props.posts} />
    </Fragment>
  )
}

export function getStaticProps() {
  const allPosts: PostData[] = getAllPosts()
  const category: AllPostCategory = getAllPostsCategory()

  return {
    props: {
      posts: allPosts,
      category,
    },
  }
}

export default RootPage
