import PostContent from './PostContent'
import PostHeader from './PostHeader'

import { Fragment } from 'react'

import type { PostData } from 'types/post'

const PostDetail = ({ postDetailInfo }: { postDetailInfo: PostData }) => {
  return (
    <Fragment>
      <PostHeader postDetailInfo={postDetailInfo} />
      <PostContent postDetailInfo={postDetailInfo} />
    </Fragment>
  )
}

export default PostDetail
