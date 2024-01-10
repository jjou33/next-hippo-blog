import { Fragment } from 'react'
import type { PostData } from 'types/post'
import PostContent from './PostContent'
import PostHeader from './PostHeader'

const PostDetail = ({ postDetailInfo }: { postDetailInfo: PostData }) => {
  return (
    <>
      <PostHeader postDetailInfo={postDetailInfo} />
      <PostContent postDetailInfo={postDetailInfo} />
    </>
  )
}

export default PostDetail
