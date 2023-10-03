import styled, { keyframes } from 'styled-components'
import Image from 'next/image'

import { cafe24OhsquareAir } from 'public/static/fonts'

export const ContentsContainer = styled.div`
  margin-top: 100vh;
  background: white;
  z-index: 1;
`

export const StyledDivider = styled.div`
  hr {
    height: 10px;
    border: 0;
    box-shadow: 0 10px 10px -10px #bbb inset;
    margin-top: 3rem;
  }
`
export const ContentsWrapper = styled.article`
  width: 700px;
  margin: 2rem auto;
  font-size: 1rem;
  line-height: 2rem;
  border-radius: 6px;
  padding: 1rem;
  font-family: ${cafe24OhsquareAir.style.fontFamily};

  blockquote {
    border: 1px solid #99d6f3;
    border-left: 10px solid #5db5db;
    margin: 20px;
    padding: 20px;
    p {
      font-style: italic;
      font-weight: 700;
    }
  }

  p {
    color: hsl(276, 5%, 20%);
    margin: 1rem 0;
    strong {
      color: red;
      font-weight: 400;
    }

    em {
      color: blue;
      font-weight: 400;
    }
  }

  p img {
    width: 100%;
    height: auto;
  }

  pre span {
    font-size: 13px;
    line-height: 0.5rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 700;
    margin: 2rem 0 0 0;
    padding-left: 1rem;
  }

  h1 {
    font-size: 40px;
    height: 45px;
    letter-spacing: -1;
  }

  h2 {
    font-size: 34px;
    height: 40px;
    letter-spacing: -0.6;
  }

  h3 {
    font-size: 30px;
    height: 100%;
    letter-spacing: -0.6;
    border-left: 5px solid #539dfd;
    @media screen and (max-width: 768px) {
      font-size: 25px;
    }
  }

  h4 {
    font-size: 25px;
    height: 30px;
    letter-spacing: -0.6;
    border-left: 5px solid #ffd381;
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }

  hr {
    border: 1px solid #000000;
    height: 3px;
    position: relative;
    border: none;
    margin: 1rem 0;
  }
  h3 + hr {
    &::after {
      content: '';
      position: absolute;
      width: 50%;
      height: 3px;
      left: 0;
      display: block;
      clear: both;
      background-color: #539dfd;
    }
    &::before {
      content: '';
      position: absolute;
      width: 50%;
      height: 3px;
      right: 0;
      display: block;
      clear: both;
      background-color: #e2dfdf;
    }
    /* background: linear-gradient(to left, red, blue); */
    margin: 10px 0;
    border-radius: 10px;
  }
  h4 + hr {
    &::after {
      content: '';
      position: absolute;
      width: 50%;
      height: 3px;
      left: 0;
      display: block;
      clear: both;
      background-color: #ffd381;
    }
    &::before {
      content: '';
      position: absolute;
      width: 50%;
      height: 3px;
      right: 0;
      display: block;
      clear: both;
      background-color: #e2dfdf;
    }
    /* background: linear-gradient(to left, red, blue); */
    margin: 10px 0;
    border-radius: 10px;
  }

  h5 + hr {
    &::after {
      content: '';
      position: absolute;
      width: 50%;
      height: 3px;
      left: 0;
      display: block;
      clear: both;
      background-color: #f5a6a6;
    }
    &::before {
      content: '';
      position: absolute;
      width: 50%;
      height: 3px;
      right: 0;
      display: block;
      clear: both;
      background-color: #e2dfdf;
    }
    /* background: linear-gradient(to left, red, blue); */
    margin-bottom: 20px;
    border-radius: 10px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    pre {
      code {
        span {
          font-size: 10px;
        }
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
