import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const LoaddingContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  position: relative;
  animation:
    ${fadeIn} 0.5s ease-in-out,
    ${fadeOut} 0.5s ease-in-out 1.5s forwards; /* 나타날 때와 사라질 때 애니메이션 */
`
export const LoaddingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 20rem;
  height: 20rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
