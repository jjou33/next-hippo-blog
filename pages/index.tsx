import MainSection from 'components/main'

import { useEffect } from 'react'
import { getAllPosts, getAllPostsCategory } from 'utils/PostUtil'
import { useSetRecoilState } from 'recoil'
import { categoryState } from 'states/categoryState'

import type { AllPostCategory, PostData } from 'types/post'
interface RootProps {
  posts: PostData[]
  category: AllPostCategory
}

const RootPage = (props: RootProps) => {
  const setCategoryInfo = useSetRecoilState(categoryState)

  useEffect(() => {
    setCategoryInfo(props.category)
  })

  return <MainSection posts={props.posts} />
}

export const getStaticProps = async () => {
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
