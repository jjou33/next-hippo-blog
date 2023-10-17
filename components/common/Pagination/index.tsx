import * as S from './styles'
import { usePagination } from 'hooks/usePagination'
import { useEffect, useState } from 'react'

const Pagination = ({
  totalPageCount,
  limitPageCount,
  currentPage,
  onChange,
}) => {
  const [pageList, setPageList] = useState([])
  const {
    isFirstGroup,
    isLastGroup,
    createPageGroupList,
    getCurrentGroupIndex,
    handleClickPage,
    handleClickLeft,
    handleClickRight,
  } = usePagination({
    totalPageCount,
    limitPageCount,
    currentPage,
    onChange,
    setPageList,
  })

  useEffect(() => {
    const groupList = createPageGroupList(totalPageCount, limitPageCount)
    const currentIndex = getCurrentGroupIndex(currentPage, limitPageCount)
    const pages = groupList[currentIndex]
    setPageList(pages)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPageCount])

  return (
    <S.PageContainer>
      <button onClick={handleClickLeft} disabled={isFirstGroup}>
        {'<'}
      </button>
      <S.PageWrapper>
        {pageList.map(page => (
          <S.PageBtn
            key={page}
            selected={page === currentPage}
            disabled={page === currentPage}
            onClick={handleClickPage}
          >
            {page}
          </S.PageBtn>
        ))}
      </S.PageWrapper>
      <button onClick={handleClickRight} disabled={isLastGroup}>
        {'>'}
      </button>
    </S.PageContainer>
  )
}

export default Pagination
