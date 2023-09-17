import styled, { keyframes } from 'styled-components'

export const HeroImageContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;

  @media screen and (min-width: 1300px) {
    width: calc(100vw - 280px);
  }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
export const TextAnimatedBox = styled.div`
  padding: 1rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
  h3 {
    z-index: 3;
  }
  &::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 290%;
    background: linear-gradient(#00ccff, #d500f9);
    animation: ${rotate} 4s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    background: #2b2e47;
    inset: 3px;
    border-radius: 16px;
  }
`

export const FlyingLottieWrapper = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0%);
  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
    top: 20%;
  }
`

export const IndicatorWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
`
