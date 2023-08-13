import styled from '@emotion/styled'
import { css } from '@emotion/react'
export const NavItemContainer = styled.ul``

export const NavItemWrapper = styled.li`
  display: flex;
  align-items: center;
  margin-top: 5px;
  width: 100%;
  border-radius: 5px;
  transition: background, 0.5s;
  gap: 10px;
  /* margin-left: 20px; */
  &:hover {
    background: #ebfeff;
    color: black;
  }
`

export const NavItem2depthArrorw = styled.div`
  float: right;
  cursor: pointer;
  margin-right: 25px;
  ${(props: { isOpen: true }) =>
    props.isOpen
      ? css`
          transform: rotate(90deg);
        `
      : css`
          transform: rotate(0deg);
          padding-top: 4px;
        `};
`

export const NavItemTitle = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  padding: 5px 0;
  /* font-size: 20px; */
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`
