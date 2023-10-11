import styled, { css } from 'styled-components'
import { themedPalette } from 'styles/themeVariables'

export const SideNavContainer = styled.div<{ isModal: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${themedPalette.bg_color};
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
