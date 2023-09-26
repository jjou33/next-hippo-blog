import styled, { keyframes } from 'styled-components'

export const HeroImageContainer = styled.div`
  position: fixed;
  height: 90vh;
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

export const TextContainer = styled.div`
  display: flex;
  gap: 15px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`

export const scroll = keyframes`
  0% {
    bottom: 80%;
    opacity: 1;
  }

  100% {
    bottom: 20%;
    opacity: 0;
  }
`
export const LottieContainer = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  left: 70%;
  transform: translateX(-50%);
  top: 25%;
`

export const DynamicTextBox = styled.div`
  height: 50px;
  width: 100%;
  margin-top: 1.5rem;
`
export const MouseIndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  /* margin-top: 5rem; */
  /* padding-top: 5rem; */
  top: 70%;
  width: 5rem;
  height: 7rem;
`
export const MouseIndicator = styled.div`
  position: relative;
  width: 2rem;
  height: 3rem;
  border: solid 2px;
  border-radius: 30px;
  border-color: #ada6bb;
  &::before {
    content: '';
    position: absolute;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    background: #e7d5b8;
    left: 50%;
    transform: translateX(-50%);
    animation: ${scroll} 2s infinite;
  }
`
