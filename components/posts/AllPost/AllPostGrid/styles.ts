import styled from '@emotion/styled'

export const GridContainer = styled.div`
  /* width: 996px; */
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media screen and (min-width: 996px) {
    width: 700px;
    margin: 0 auto;
  }
`
