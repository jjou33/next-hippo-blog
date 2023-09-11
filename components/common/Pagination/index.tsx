import * as S from './styles'
import { usePagination } from 'hooks/usePagination'

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
  // const totalPosts = posts.length

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
