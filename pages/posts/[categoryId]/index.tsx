import { FlexBox } from 'components/common/StyledLayout'
import PostCategoryList from 'components/posts/PostCategoryList'
import METADATA from 'constants/METADATA'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { getAllPostsCategory, getCategoryPosts } from 'utils/postUtils'

const PostCategoryListPage = ({ posts, category, categoryId }) => {
  const { query } = useRouter()

  return (
    <>
      <NextSeo
        title={`About ${categoryId}`}
        description={`${categoryId} 와 관련된 포스트를 모아둔 공간입니다.`}
        canonical={`${METADATA.meta.url}/posts/${categoryId}?page=${query.page}`}
        openGraph={{
          url: `${METADATA.meta.url}/posts/${categoryId}?page=${query.page}`,
        }}
      />
      <FlexBox flexDirection={'column'}>
        <PostCategoryList
          posts={posts}
          categoryId={categoryId}
          keywords={category.keywordSet[categoryId]}
        />
      </FlexBox>
    </>
  )
}

export default PostCategoryListPage

export async function getServerSideProps({ params }) {
  const { categoryId } = params

  const postList = getCategoryPosts(categoryId)
  const category = getAllPostsCategory()

  return {
    props: {
      posts: postList,
      category,
      categoryId,
    },
  }
}
