import { useRef, useState } from 'react'

const range = (size: number, start: number) => {
  return Array(size)
    .fill(start)
    .map((x, y) => x + y)
}

const createPageGroupList = (
  totalPageCount: number,
  limitPageCount: number,
) => {
  const totalPageGroupList = range(totalPageCount, 1)
  const pagesGroupList = []

  for (let i = 0; i < totalPageGroupList.length; i += limitPageCount) {
    pagesGroupList.push(totalPageGroupList.slice(i, i + limitPageCount))
  }

  return pagesGroupList
}

// 현재 페이지가 속한 그룹의 index를 구하기 위한 함수
const getCurrentGroupIndex = (currentPage: number, limitPageCount: number) => {
  return Math.ceil(currentPage / limitPageCount) - 1
}
export const usePagination = ({
  totalPageCount,
  limitPageCount,
  currentPage,
  onChange,
}) => {
  const pagesGroupList = useRef<number[][]>(
    createPageGroupList(totalPageCount, limitPageCount),
  )

  const currentGroupIndex = useRef<number>(
    getCurrentGroupIndex(currentPage, limitPageCount),
  )
  const [pages, setPages] = useState<number[]>(
    pagesGroupList.current[currentGroupIndex.current],
  )

  const isFirstGroup = currentGroupIndex.current === 0
  const isLastGroup =
    currentGroupIndex.current === pagesGroupList.current.length - 1

  const handleClickPage = event => {
    const { textContent } = event.target
    const selectedPage = Number(textContent)
    onChange(selectedPage) // 클릭한 페이지로 url변경
  }

  const handleClickLeft = () => {
    if (isFirstGroup) return
    currentGroupIndex.current -= 1
    setPages(pagesGroupList.current[currentGroupIndex.current]) // 이전 그룹으로 ui변경
    onChange(
      pagesGroupList.current[currentGroupIndex.current][limitPageCount - 1],
    ) //현재 속한 그룹의 가장 마지막 페이지로 url변경
  }

  const handleClickRight = () => {
    if (isLastGroup) return
    currentGroupIndex.current += 1
    setPages(pagesGroupList.current[currentGroupIndex.current]) // 다음 그룹으로 ui변경
    onChange(pagesGroupList.current[currentGroupIndex.current][0]) //현재 속한 그룹의 가장 첫번째 페이지로 url변경
  }

  return {
    pages,
    isFirstGroup,
    isLastGroup,
    handleClickPage,
    handleClickLeft,
    handleClickRight,
  }
}
