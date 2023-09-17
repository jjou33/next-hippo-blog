import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 3rem auto;
`

export const PageWrapper = styled.div`
  display: flex;

  /* width: 100%; */
`
export const PageBtn = styled.button<{ selected: boolean }>`
  padding: 4px 6px;
  background-color: ${({ selected }) => (selected ? '#000' : 'transparent')};
  color: ${({ selected }) => (selected ? '#fff' : '#000')};
  font-size: 20px;
  cursor: pointer;
  & + & {
    margin-left: 4px;
  }
  &:disabled {
    cursor: default;
  }
`
