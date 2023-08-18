import styled from '@emotion/styled'
import { css } from '@emotion/react'
import theme from 'styles/theme'
export const NavItem1depthContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  /* border: 1px solid; */
  margin: 0 5px;
  cursor: pointer;
  position: relative;
  span {
    color: ${({ openState }) => (openState ? 'red' : '')};
  }
  :hover {
    span {
      color: red;
    }
  }
`
export const NavItem1depthWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 1rem;
  padding: 0.2rem;
  background-color: #fef5f5;
  /* border: 1px solid; */
`

export const NavItem1depthArrorw = styled.div`
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

  transition: transform ease-in-out 0.5s;
`

export const DropdownWrapper = styled.article`
  overflow: hidden;
  margin-left: 1rem;
  height: 0;
  transition: height ease-in-out 0.3s;
  ${(props: { isOpen: boolean; categoryItemCount: number }) => {
    if (props.isOpen) {
      return css`
        height: ${(props.categoryItemCount as number) * 35}px;
        /* height: 100%; */
      `
    } else {
      return css`
        height: 0;
        /* overflow: hidden; */
      `
    }
  }}
`

export const NavIconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 27px;
  height: 27px;
  background-color: ${theme.colors.gray_001};
`
