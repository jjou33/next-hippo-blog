import MainSection from 'components/main'

import { Fragment, useEffect } from 'react'
import { getAllPosts, getAllPostsCategory } from 'utils/PostUtil'

import type { AllPostCategory, PostData } from 'types/post'
import { useSetRecoilState } from 'recoil'
import { categoryState } from 'states/categoryState'

interface RootProps {
  posts: PostData[]
  category: AllPostCategory
}

const RootPage = (props: RootProps) => {
  console.log('root : ', props.category)
  const setCategoryInfo = useSetRecoilState(categoryState)

  useEffect(() => {
    setCategoryInfo(props.category)
  })

  return (
    <Fragment>
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
