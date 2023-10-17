import { Typography } from 'components/common'
import styled from 'styled-components'

export const StyledImageContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;

  @media screen and (min-width: 1300px) {
    width: calc(100vw - 280px);
  }

  @media screen and (max-width: 768px) {
    height: 80vh;
  }
`

export const IndicatorWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
`

export const HeroTitleWrapper = styled(Typography)`
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`

export const StyledImage = styled.div`
  position: relative;
  height: 100vh;
`
