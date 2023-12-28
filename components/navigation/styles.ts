import styled, { css } from 'styled-components'

export const SideNavContainer = styled.div<{ isModal: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${({ theme }) => theme.color.background_001};
  ${({ isModal }) =>
    isModal
      ? css`
          @media screen and (min-width: 1300px) {
            display: none;
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
