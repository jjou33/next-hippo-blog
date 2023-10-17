import styled from 'styled-components'

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 0 3rem;
  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
`
