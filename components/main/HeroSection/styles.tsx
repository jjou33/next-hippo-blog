import styled, { keyframes } from 'styled-components'

export const IndicatorContainer = styled.div`
  width: 10rem;
  height: 10rem;
  background-color: red;
  position: absolute;
  bottom: 0;
  right: 50%;
`
export const HeroWriteContainer = styled.div`
  flex: 1;

  width: 400px;
  margin: 0 auto;
  height: 100%;
`
export const HeroInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  /* margin: 15rem; */
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`

export const HeroImageContainer = styled.div`
  position: fixed;
  height: 100vh;
  overflow: hidden;
  width: 100%;

  @media screen and (min-width: 1300px) {
    width: calc(100vw - 280px);
  }
`

const blinkCursorKeyframe = keyframes`
  50% {
    opacity: 0;
  }
`

export const HeroInfoMoveContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 5rem;
`
export const HeroTextContainer = styled.div`
  font-size: 2rem;
  color: white;
  font-family: 'Courier New', Courier, monospace;
  &::after {
    content: '';
    position: absolute;
    background-color: #e65454;
    height: 2.5rem;
    margin-left: 0.5rem;
    width: 5px;
    animation: ${blinkCursorKeyframe} 0.5s infinite;
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
  margin-top: 5rem;
`
export const MouseIndicator = styled.div`
  position: relative;
  width: 2rem;
  height: 3rem;
  border: solid 1px;
  border-radius: 30px;
  border-color: #b2a2ce;
  background: #35303d;
  &::before {
    content: '';
    position: absolute;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    background: #cb9f59;
    left: 50%;
    transform: translateX(-50%);
    animation: ${scroll} 2s infinite;
  }
`
export const HeroMoveItemContainer = styled.div``
