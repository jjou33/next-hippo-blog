import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

export const SliderContainer = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 996px;
  margin: auto;
  place-items: center;
  overflow: hidden;
`
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
  animation: ${scroll} 20s linear infinite;
  /* gap: 100px; */
`
