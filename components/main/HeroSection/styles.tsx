import { FlexBox } from 'components/common/StyledLayout'
import Image from 'next/image'
import styled, { keyframes } from 'styled-components'

export const HeroImageContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;

  @media screen and (min-width: 1300px) {
    width: calc(100vw - 280px);
  }

  @media screen and (max-width: 800px) {
    height: 80vh;
  }
`

export const StyledImage = styled(Image)<{ selected: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  filter: brightness(50%);
  opacity: ${({ selected }) => (selected ? 1 : 0)};
  transition: opacity 3s;
`

const TextEffectKeyFrame = keyframes`
  to {
    background-position: 200% center;
  }
`

export const ColorText = styled.div`
  background-image: linear-gradient(
    -225deg,
    #edb575 0%,
    #b197cc 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${TextEffectKeyFrame} 2s linear infinite;
  display: inline-block;
  font-size: 4rem;
  text-align: center;
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
export const LottieWrapper = styled.div`
  width: 40%;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`
export const ResponsiveContentsWrapper = styled(FlexBox)`
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const HeroTextWrapper = styled(FlexBox)`
  font-size: 1rem;
  @media screen and (max-width: 768px) {
    span {
      font-size: 3rem;
    }
  }
`
export const HeroContentsWrapper = styled(FlexBox)`
  align-items: center;
  text-align: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const MouseIndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1rem;
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

export const HeroInfoContainer = styled.div<{
  currentPercentage: number
}>`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  opacity: ${({ currentPercentage }) => currentPercentage};
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    margin-top: 0;
    h1 {
      font-size: 55px;
    }

    h2 {
      font-size: 45px;
    }

    h3 {
      font-size: 40px;
    }
  }
`
