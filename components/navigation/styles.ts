import styled, { css, keyframes } from 'styled-components'

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`
export const SideNavContainer = styled.div<{ isModal: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  /* animation: ${slideIn} 0.6s ease-in-out; */
  ${({ isModal }) =>
    isModal
      ? css`
          @media screen and (min-width: 1300px) {
            display: none;
            background-color: white;
          }
        `
      : css`
          @media screen and (max-width: 1300px) {
            display: none;
          }
        `}
`

export const SideNavWrapper = styled.aside`
  position: sticky;
  height: 100vh;
  overflow-y: auto;
  top: 0;
  &::-webkit-scrollbar {
    display: none;
  }
`
