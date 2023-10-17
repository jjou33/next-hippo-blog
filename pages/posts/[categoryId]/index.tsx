import { FlexBox } from 'components/common/StyledLayout'
import PostCategoryList from 'components/posts/PostCategoryList'
import METADATA from 'constants/METADATA'
import { NextSeo } from 'next-seo'
import {
  getAllPostsCategory,
  getCategoryPosts,
  getSlugByParams,
} from 'utils/PostUtil'

const PostCategoryListPage = props => {
  return (
    <>
      <NextSeo
        title={`About ${props.categoryId}`}
        description={`${props.categoryId} 와 관련된 포스트를 모아둔 공간입니다.`}
        canonical={`${METADATA.meta.url}/posts/${props.categoryId}`}
        openGraph={{
          url: `${METADATA.meta.url}/posts/${props.categoryId}`,
        }}
      />
      <FlexBox flexDirection="column">
        <PostCategoryList
          posts={props.posts}
          categoryId={props.categoryId}
          keywords={props.category.keywordSet[props.categoryId]}
        />
      </FlexBox>
    </>
  )
}

export default PostCategoryListPage

export const getStaticProps = async ({ params }) => {
  const categoryId = params.categoryId

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

export const getStaticPaths = async () => {
  const slugs = getSlugByParams()

  return {
    paths: slugs.map(([categoryId]) => ({
      params: { categoryId },
    })),
    fallback: false,
  }
}
