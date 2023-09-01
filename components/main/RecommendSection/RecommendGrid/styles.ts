import styled, { keyframes } from 'styled-components'

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
`
export const SliderTrack = styled.div`
  display: flex;
  animation: ${scroll} 40s linear infinite;
`

export const SliderContainer = styled.div`
  display: flex;
  position: relative;
  place-items: center;
  width: 100%;
  overflow: hidden;

  @media screen and (min-width: 1000px) {
    width: 960px;
    margin: 0 auto;
  }
`
