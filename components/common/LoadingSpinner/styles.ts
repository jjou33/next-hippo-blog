import styled, { css } from 'styled-components'

export const LoadingBox = styled.div<{ isLoading: boolean }>`
  position: fixed;
  ${({ isLoading }) =>
    isLoading
      ? css`
          transition: 0.1s ease-in;
          visibility: visible;
          opacity: 1;
        `
      : css`
          transition: 0.3s ease-out;
          visibility: hidden;
          opacity: 0;
        `}
  z-index: 20;
  height: 100vh;
  width: calc(100vw - 280px);

  @media screen and (max-width: 1300px) {
    width: 100%;
  }
`
export const LoaddingContainer = styled.div`
  height: 100vh;

  background-color: rgba(255, 255, 255, 0.7);
  position: relative;
`
export const LoaddingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 10rem;
  height: 10rem;
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
