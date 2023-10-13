import * as S from './styles'
import { usePagination } from 'hooks/usePagination'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Pagination = ({
  totalPageCount,
  limitPageCount,
  currentPage,
  onChange,
}) => {
  const {
    pages,
    isFirstGroup,
    isLastGroup,
    handleClickPage,
    handleClickLeft,
    handleClickRight,
  } = usePagination({ totalPageCount, limitPageCount, currentPage, onChange })
  const router = useRouter()
  const { categoryId } = router.query
  console.log('dd', pages)
  return (
    <S.PageContainer>
      <button onClick={handleClickLeft} disabled={isFirstGroup}>
        {'<'}
      </button>
      <S.PageWrapper>
        {pages.map(page => (
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
