import { usePagination } from 'hooks/usePagination'
import { useEffect, useState } from 'react'
import * as S from './styles'

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
  }, [currentPage, totalPageCount])

  return (
    <S.PageContainer>
      <S.PageWrapper>
        <S.SideButton
          side={'left'}
          onClick={handleClickLeft}
          disabled={isFirstGroup}
        />
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
        <S.SideButton
          side={'right'}
          onClick={handleClickRight}
          disabled={isLastGroup}
        />
      </S.PageWrapper>
    </S.PageContainer>
  )
}

export default Pagination
