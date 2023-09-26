import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const usePostChangeByPaging = posts => {
  // 한 페이지 최대 노출 포스트 갯수
  const POST_LENGTH = 4

  const router = useRouter()

  const { page, categoryId } = router.query
  const totalPageCount = Math.ceil(posts.length / POST_LENGTH)

  const [currentPage, setCurrentPage] = useState(1)
  const [exposePost, setExposePost] = useState([])

  useEffect(() => {
    if (!page) return
    setCurrentPage(Number(page))
    setExposePost(handleExposePost(Number(page)))
  }, [posts, page])

  const handleChangePage = (page: number) => {
    if (categoryId) {
      router.push(`${categoryId}?page=${page ?? 1}`, undefined, {
        shallow: true,
        scroll: true,
      })
    } else {
      router.push(`?page=${page ?? 1}`, undefined, {
        shallow: true,
        scroll: true,
      })
    }
  }

  const handleExposePost = (page: number) => {
    return posts
      ? posts.slice((page - 1) * POST_LENGTH, POST_LENGTH * page)
      : posts
  }

  return {
    currentPage,
    exposePost,
    handleChangePage,
    totalPageCount,
  }
}
