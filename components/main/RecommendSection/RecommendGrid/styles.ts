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
  animation: ${scroll} 20s linear infinite;

  /* gap: 100px; */
`

export const SliderContainer = styled.div`
  display: flex;
  position: relative;
  /* margin: 20px auto; */
  place-items: center;
  width: 100%;
  overflow: hidden;

  @media screen and (min-width: 1000px) {
    width: 960px;
    margin: 0 auto;
  }
`
