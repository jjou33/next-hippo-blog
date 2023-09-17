import styled, { css, keyframes } from 'styled-components'

export const ModalWrapper = styled.div<{ visible: boolean }>`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
  transition: 1s;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const ModalOverlay = styled.div<{ visible: boolean }>`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`

const slideInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

const slideInLeft = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
`
export const ModalInner = styled.div<{ visible: boolean }>`
  position: relative;
  background: white;
  width: 300px;
  animation: ${({ visible }) =>
    visible
      ? css`
          ${slideInRight} 0.5s ease-in;
        `
      : css`
          ${slideInLeft} 0.5s ease-out;
        `};
`

export const CloseButton = styled.div`
  width: 20px;
  height: 10px;
  border-radius: 10px;
`
