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
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.5);
  position: relative;
  /* animation: ${fadeIn} 0.5s ease-in-out; */
  animation:
    ${fadeIn} 0.5s ease-in-out,
    ${fadeOut} 0.5s ease-in-out 1.5s forwards;
`
export const LoaddingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 30rem;
  height: 30rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Container = styled.div`
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`
