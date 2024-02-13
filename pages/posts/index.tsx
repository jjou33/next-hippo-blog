import PostCategoryList from 'components/posts/PostCategoryList'
import METADATA from 'constants/METADATA'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

import { getAllPostsCategory, getAllPosts } from 'utils/postUtils'

const AllPostPage = ({ posts, category }) => {
  const { query } = useRouter()

  return (
    <>
      <NextSeo
        title={'ALLPOST PAGE'}
        description={'블로그의 모든 포스트를 확인할 수 있는 공간입니다.'}
        canonical={`${METADATA.meta.url}/posts?page=${query.page}`}
        openGraph={{
          url: `${METADATA.meta.url}/posts?page=${query.page}`,
        }}
      />
      <PostCategoryList
        posts={posts}
        keywords={category.keywordSet.AllKeywords}
      />
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts()
  const category = getAllPostsCategory()

  return {
    props: {
      posts: allPosts,
      category,
    },
  }
}

export default AllPostPage
