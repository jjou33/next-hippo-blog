import MainSection from 'components/main'

import { useEffect } from 'react'
import { getAllPosts, getAllPostsCategory } from 'utils/postUtils'
import { useSetRecoilState } from 'recoil'
import { categoryState } from 'states/categoryState'
import { NextSeo } from 'next-seo'
import type { AllPostCategory, PostData } from 'types/post'

interface RootProps {
  posts: PostData[]
  category: AllPostCategory
}

const RootPage = ({ posts, category }: RootProps) => {
  const setCategoryInfo = useSetRecoilState(categoryState)

  useEffect(() => {
    setCategoryInfo(category)
  })

  return (
    <>
      <NextSeo
        title={'Home'}
        description={'HIPPO 의 DEVLOG'}
        canonical={'https://next-hippo-blog.vercel.app/'}
        openGraph={{
          url: 'https://next-hippo-blog.vercel.app/',
        }}
      />
      <MainSection posts={posts} />
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
