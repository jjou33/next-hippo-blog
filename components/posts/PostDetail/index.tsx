import { Fragment } from 'react'
import PostContent from './PostContent'
import PostHeader from './PostHeader'

const PostDetail = props => {
  return (
    <Fragment>
      <PostHeader posts={props.posts} />
      <PostContent posts={props.posts} />
    </Fragment>
  )
}

export default PostDetail
