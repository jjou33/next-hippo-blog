import * as S from './styles'

import VerticalGrid from './VerticalGrid'
import HorizontalGrid from './HorizontalGrid'
import Pagination from 'components/common/Pagination'

import { usePostChangeByPaging } from 'hooks/usePostChangeByPaging'

import type { PostData } from 'types/post'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

interface PostListProps {
  posts: PostData[]
  isMain?: boolean
  isAllPost?: boolean
}

const PostList = ({ posts, isMain, isAllPost }: PostListProps) => {
  // const { totalPageCount, currentPage, exposePost, handleChangePage } =
  //   usePostChangeByPaging(posts)
  const paginationData = usePostChangeByPaging(posts)
  const router = useRouter()
  const { categoryId } = router.query
  // console.log('dd')
  return (
    <S.PostListContainer>
      {isMain ? (
        <VerticalGrid posts={posts.slice(0, 6)} />
      ) : (
        <>
          {isAllPost ? (
            <VerticalGrid posts={paginationData.exposePost} />
          ) : (
            <HorizontalGrid posts={paginationData.exposePost} />
          )}
        </>
      )}
      <Pagination
        totalPageCount={paginationData.totalPageCount}
        limitPageCount={6}
        currentPage={paginationData.currentPage}
        onChange={paginationData.handleChangePage}
      />
    </S.PostListContainer>
  )
}

export default PostList
