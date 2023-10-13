import PostDetail from 'components/posts/PostDetail'
import {
  getAllPostsCategory,
  getPostData,
  getSlugByParams,
} from 'utils/PostUtil'

import type { PostData } from 'types/post'
import { NextSeo } from 'next-seo'

const PostDetailPage = ({
  postDetailInfo,
  categoryId,
  postId,
}: {
  postDetailInfo: PostData
  categoryId: string
  postId: string
}) => {
  return (
    <>
      <NextSeo
        title={`${postDetailInfo.title}`}
        description={`${postDetailInfo.excerpt}`}
        canonical={`https://next-hippo-blog.vercel.app/${categoryId}/${postId}`}
        openGraph={{
          url: `https://next-hippo-blog.vercel.app/${categoryId}/${postId}`,
        }}
      />
      <PostDetail postDetailInfo={postDetailInfo} />
    </>
  )
}

export default PostDetailPage

export const getStaticProps = async ({ params: { categoryId, postId } }) => {
  const postData = getPostData(`${categoryId}/${postId}`)
  const category = getAllPostsCategory()

  return {
    props: {
      postDetailInfo: postData,
      category,
      categoryId,
      postId,
    },
  }
}

export const getStaticPaths = async () => {
  const slugs = getSlugByParams()

  return {
    paths: slugs.map(([categoryId, postId]) => ({
      params: { categoryId, postId },
    })),
    fallback: false,
  }
}
