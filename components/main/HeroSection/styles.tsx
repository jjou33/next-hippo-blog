import styled, { keyframes } from 'styled-components'

export const ImageContainer = styled.div<{ visible: boolean }>`
  transition: opacity 0.5s ease-in-out; /* 페이드 인/아웃 트랜지션 설정 */
  opacity: ${props =>
    props.visible ? 1 : 0}; //현재 이미지가 보일지 여부에 따라 투명도 조절
`

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

export const HeroImageContainer = styled.div`
  position: fixed;
  height: 100vh;
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
  padding-top: 3rem;
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
  /* background: #35303d; */
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
export const HeroMoveItemContainer = styled.div``

export const FireCrackerWrapper = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
`

interface HeroInfoProps {
  currentPercentage: number
}
export const HeroInfoContainer = styled.div.attrs<HeroInfoProps>(props => ({
  style: {
    opacity: `${props.currentPercentage}`,
  },
}))`
  width: 100%;
  height: 100%;
  /* margin: 15rem; */
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`
