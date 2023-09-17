import styled from 'styled-components'

export const StyledImageContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;

  @media screen and (min-width: 1300px) {
    width: calc(100vw - 280px);
  }
`

export const IndicatorWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
`
