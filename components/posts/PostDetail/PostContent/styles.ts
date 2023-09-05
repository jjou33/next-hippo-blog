import styled, { keyframes } from 'styled-components'
import Image from 'next/image'

import { cafe24OhsquareAir } from 'public/static/fonts'

export const ContentsContainer = styled.div`
  margin-top: 100vh;
  background: white;
  z-index: 1;
`
export const ContentsWrapper = styled.article`
  width: 700px;
  margin: 2rem auto;
  font-size: 1rem;
  line-height: 2.5rem;
  border-radius: 6px;
  /* padding: 1rem; */
  font-family: ${cafe24OhsquareAir.style.fontFamily};
  p {
    color: hsl(276, 5%, 20%);
  }

  p img {
    width: 100%;
    height: auto;
  }

  pre span {
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    /* font-size: 10px; */
    width: 100%;
    pre {
      line-height: 0.5;
      span {
        font-size: 10px;
      }
      * {
        line-height: 0;
      }
    }
  }
`
export const ImageWrapper = styled.div`
  position: relative;
`
export const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`

export const WaveKeyframe1 = keyframes`
  0% {
    transform: translate(85px, 0%);
  }
  100% {
    transform: translate(-90px, 0%);
  }
`
export const WaveKeyframe2 = keyframes`
  0% {
    transform: translate(-90px, 0%);
  }
  100% {
    transform: translate(85px, 0%);
  }
`
export const WaveKeyframe3 = keyframes`
  0% {
    transform: translate(85px, 0%);
  }
  100% {
    transform: translate(-90px, 0%);
  }
`
export const WaveKeyframe4 = keyframes`
  0% {
    transform: translate(-90px, 0%);
  }
  100% {
    transform: translate(85px, 0%);
  }
`

export const WaveAnimationContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0;
  svg {
    width: 500px;
  }
`

export const SectionContainer = styled.div`
  padding: 0 2rem 5rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`
export const WaveAnimationBox = styled.div`
  .editorial {
    display: block;
    width: 100%;
    height: 100px;
    max-height: 100px;
    margin: 0;
    z-index: 5;
    bottom: 0;
    position: absolute;
  }

  .parallax1 > use {
    animation: ${WaveKeyframe1} 10s linear infinite;
    &:nth-of-type(1) {
      animation-delay: -2s;
    }
  }
  .parallax2 > use {
    animation: ${WaveKeyframe2} 8s linear infinite;
    &:nth-of-type(1) {
      animation-delay: -2s;
    }
  }
  .parallax3 > use {
    animation: ${WaveKeyframe3} 6s linear infinite;
    &:nth-of-type(1) {
      animation-delay: -2s;
    }
  }
  .parallax4 > use {
    animation: ${WaveKeyframe4} 4s linear infinite;
    &:nth-of-type(1) {
      animation-delay: -2s;
    }
  }
`
