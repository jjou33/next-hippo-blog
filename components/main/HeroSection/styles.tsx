import Image from 'next/image'
import styled, { keyframes } from 'styled-components'

export const HeroImageContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;

  @media screen and (min-width: 1300px) {
    width: calc(100vw - 280px);
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
  /* padding-top: 5rem; */
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

  @media screen and (max-width: 768px) {
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
