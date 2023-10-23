import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import DATA from 'constants/data'
import type { PostData } from 'types/post'
export const usePostChangeByPaging = (posts: PostData[]) => {
  // 한 페이지 최대 노출 포스트 갯수

  const router = useRouter()

  const { page, categoryId } = router.query

  const totalPageCount = Math.ceil(posts.length / DATA.MAIN_POST_LENGTH)

  const [currentPage, setCurrentPage] = useState(1)
  const [exposePost, setExposePost] = useState([])

  useEffect(() => {
    if (page) {
      setCurrentPage(Number(page))
    } else {
      setCurrentPage(1)
    }
    setExposePost(handleExposePost(Number(page)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts, page])

  const handleChangePage = (page: number) => {
    if (categoryId) {
      router.push(`${categoryId}?page=${page ?? ''}`, undefined, {
        shallow: true,
        scroll: true,
      })
    } else {
      router.push(`?page=${page ?? ''}`, undefined, {
        shallow: true,
        scroll: true,
      })
    }
  }

  const handleExposePost = (page: number) => {
    return page
      ? posts.slice(
          (page - 1) * DATA.MAIN_POST_LENGTH,
          DATA.MAIN_POST_LENGTH * page,
        )
      : posts.slice(0, DATA.MAIN_POST_LENGTH)
  }

  return {
    currentPage,
    exposePost,
    handleChangePage,
    totalPageCount,
  }
}
