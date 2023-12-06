import styled, { css } from 'styled-components'
import { themedPalette } from 'styles/themeVariables'

export const NavMainCategoryItem = styled.div<{ openState: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0 5px;
  cursor: pointer;
  position: relative;
  span {
    color: ${({ openState }) =>
      openState ? `${themedPalette.point_color}` : ''};
  }
  &:hover {
    span {
      color: ${themedPalette.point_color};
    }
  }
`

export const NavIconBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 27px;
  height: 27px;
  background-color: ${themedPalette.bg_element_color};
`

export const NavItemArrowWrapper = styled.div<{ isOpen: boolean }>`
  margin-left: 85%;
  position: absolute;
  width: 20px;
  height: 20px;
  ${(props: { isOpen: boolean }) =>
    props.isOpen
      ? css`
          transform: rotate(90deg);
        `
      : css`
          transform: rotate(0deg);
          padding-top: 4px;
        `};

  transition: transform ease-in-out 0.3s;
`

export const DropdownWrapper = styled.div<{
  isOpen: boolean
  categoryItemCount: number
}>`
  overflow: hidden;
  margin-left: 0.5rem;
  height: 0;
  transition: height ease-in-out 0.3s;
  ${props => {
    if (props.isOpen) {
      return css`
        height: ${(props.categoryItemCount as number) * 35 + 25}px;
      `
    } else {
      return css`
        height: 0;
      `
    }
  }}
`
