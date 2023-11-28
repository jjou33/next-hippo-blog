import DATA from 'constants/data'

import { NextRouter, useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import type { PostData } from 'types/post'

export const usePostChangeByPaging = (posts: PostData[]) => {
  const router: NextRouter = useRouter()

  const { page, categoryId } = router.query

  const refreshCurrentPage = router.asPath.split('=')[1]
  const totalPageCount = Math.ceil(posts.length / DATA.MAIN_POST_LENGTH)

  const [currentPage, setCurrentPage] = useState(Number(refreshCurrentPage))
  const [exposePost, setExposePost] = useState([])

  useEffect(() => {
    if (page) {
      setCurrentPage(Number(page))
    } else {
      setCurrentPage(Number(refreshCurrentPage))
    }
    setExposePost(handleExposePost(Number(page)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts, page])

  const handleChangePage = (page: number) => {
    if (categoryId) {
      router.push(
        {
          pathname: categoryId as string,
          query: { page: page || '' },
        },
        undefined,
        { shallow: true, scroll: true },
      )
    } else {
      router.push(
        {
          pathname: '',
          query: { page: page || '' },
        },
        undefined,
        { shallow: true, scroll: true },
      )
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
