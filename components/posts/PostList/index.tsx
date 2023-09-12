import * as S from './styles'

import VerticalGrid from './VerticalGrid'
import HorizontalGrid from './HorizontalGrid'
import Pagination from 'components/common/Pagination'

import { usePostChangeByPaging } from 'hooks/usePostChangeByPaging'

import type { PostData } from 'types/post'

interface PostListProps {
  posts: PostData[]
  isMain?: boolean
}
const PostList = ({ posts, isMain }: PostListProps) => {
  const { totalPageCount, currentPage, exposePost, handleChangePage } =
    usePostChangeByPaging(posts)

  return (
    <S.PostListContainer>
      {isMain ? (
        <VerticalGrid posts={posts.slice(0, 6)} />
      ) : (
        <>
          <HorizontalGrid posts={exposePost} />
          <Pagination
            totalPageCount={totalPageCount}
            limitPageCount={5}
            currentPage={currentPage}
            onChange={handleChangePage}
          />
        </>
      )}
    </S.PostListContainer>
  )
}

export default PostList
