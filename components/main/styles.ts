import styled, { keyframes } from 'styled-components'
import theme from 'styles/theme'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100vh;
  gap: 10rem;
  background: ${theme.color.bg_color};
  z-index: 1;
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

export const SectionContainer = styled.div`
  padding: 0 2rem 5rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`
export const IndicatorContainer = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 70%;
  background-color: white;
  position: absolute;
  top: calc(100vh - 4.7rem);

  @media screen and (max-width: 768px) {
    top: calc(100vh - 4.5rem);
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

export const MouseIndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
`
export const MouseIndicator = styled.div`
  position: relative;
  width: 2rem;
  height: 3rem;
  border: solid 4px;
  border-radius: 30px;

  &::before {
    content: '';
    position: absolute;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    background: #3e54ac;
    left: 50%;
    transform: translateX(-50%);
    animation: ${scroll} 2s infinite;
  }
`
