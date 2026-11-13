import PostDetail from 'components/posts/PostDetail'
import {
  getAllPostsCategory,
  getPostData,
  getSlugByParams,
} from 'utils/postUtils'

import type { PostData } from 'types/post'
import { NextSeo } from 'next-seo'
import METADATA from 'constants/METADATA'
import { getNewBlogUrl } from 'constants/NEW_BLOG'

const PostDetailPage = ({
  postDetailInfo,
  categoryId,
  postId,
}: {
  postDetailInfo: PostData
  categoryId: string
  postId: string
}) => {
  const { category1depth, category2depth, image, excerpt } = postDetailInfo
  // 새 블로그로 옮긴 글은 대표 주소를 새 블로그로 알린다 (검색엔진의 중복 글 처리)
  const pageUrl =
    getNewBlogUrl(categoryId, postId) ??
    `${METADATA.meta.url}/posts/${categoryId}/${postId}`
  return (
    <>
      <NextSeo
        title={`${postDetailInfo.title}`}
        description={`${postDetailInfo.excerpt}`}
        canonical={pageUrl}
        openGraph={{
          url: pageUrl,
          images: [
            {
              url: `${METADATA.meta.imageUrl}/${category1depth}/${category2depth}/${image}`,
              alt: `${excerpt}`,
            },
          ],
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
