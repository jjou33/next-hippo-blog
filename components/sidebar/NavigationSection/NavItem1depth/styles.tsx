import styled from '@emotion/styled'
import { css } from '@emotion/react'
export const NavItem1depthContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  /* border: 1px solid; */
  cursor: pointer;
  position: relative;
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

  ${(props: { isOpen: boolean }) =>
    props.isOpen
      ? css`
          transform: rotate(90deg);
        `
      : css`
          transform: rotate(0deg);
          padding-top: 4px;
        `};
`

export const DropdownWrapper = styled.article`
  overflow: hidden;
  margin-left: 30px;
  height: 0;
  transition: height ease-in-out 0.3s;
  ${(props: { isOpen: boolean; categoryItemCount: number }) => {
    if (props.isOpen) {
      return css`
        height: ${(props.categoryItemCount as number) * 40 + 10}px;
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
