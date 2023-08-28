import styled, { css } from 'styled-components'
import theme from 'styles/theme'

export const NavMainCategoryItem = styled.li<{ openState: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0 5px;
  cursor: pointer;
  position: relative;
  span {
    color: ${({ openState }) => (openState ? 'red' : '')};
  }
  &:hover {
    span {
      color: #f25b5b;
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
  background-color: ${theme.colors.gray_001};
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

export const DropdownWrapper = styled.article<{
  isOpen: boolean
  categoryItemCount: number
}>`
  overflow: hidden;
  margin-left: 1rem;
  height: 0;
  transition: height ease-in-out 0.3s;
  ${props => {
    if (props.isOpen) {
      return css`
        height: ${(props.categoryItemCount as number) * 35 + 10}px;
      `
    } else {
      return css`
        height: 0;
      `
    }
  }}
`
