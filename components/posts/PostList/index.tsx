import * as S from './styles'

import VerticalGrid from './VerticalGrid'
import HorizontalGrid from './HorizontalGrid'

import type { PostData } from 'types/post'
import Pagination from 'components/common/Pagination'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { usePagination } from 'hooks/usePagination'

interface PostListProps {
  posts: PostData[]
  isMain?: boolean
}
const PostList = ({ posts, isMain }: PostListProps) => {
  const POST_LENGTH = 1

  const router = useRouter()
  const { page, categoryId } = router.query

  const [currentPage, setCurrentPage] = useState(1)
  const [exposePost, setExposePost] = useState([])

  const handleChangePage = (page: number) => {
    router.push(`${categoryId}?page=${page}`, undefined, {
      shallow: true,
      scroll: true,
    })
  }

  const handleExposePost = (page: number) => {
    return posts
      ? posts.slice((page - 1) * POST_LENGTH, POST_LENGTH * page)
      : posts
  }
  useEffect(() => {
    if (!page) {
      setExposePost(posts)
    } else {
      setCurrentPage(Number(page))
      setExposePost(handleExposePost(Number(page)))
    }
  }, [page])

  return (
    <S.PostListContainer>
      {isMain ? (
        <VerticalGrid posts={posts.slice(0, 6)} />
      ) : (
        <>
          <HorizontalGrid posts={exposePost} />
          <Pagination
            totalPageCount={Math.round(posts.length / POST_LENGTH)}
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
