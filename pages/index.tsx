import MainSection from 'components/main'

import { useEffect } from 'react'
import { getAllPosts, getAllPostsCategory } from 'utils/PostUtil'
import { useSetRecoilState } from 'recoil'
import { categoryState } from 'states/categoryState'
import { NextSeo } from 'next-seo'
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

  return (
    <>
      <NextSeo
        title="Home"
        description="HIPPO 의 DEVLOG"
        canonical="https://hippodevlog.vercel.app/"
        openGraph={{
          url: 'https://hippodevlog.vercel.app/',
        }}
      />
      <MainSection posts={props.posts} />
    </>
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
