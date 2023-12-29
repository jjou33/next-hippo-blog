import styled from 'styled-components'

import { Typography } from 'components/common'

export const PostTocContainer = styled.nav`
  font-size: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`

export const PostTocTitle = styled.li`
  border: 1px solid ${({ theme }) => theme.color.border_001};
  border-radius: 10px 10px 0 0;
  display: list-item;
  outline: none;
  word-break: break-all;
  padding: 10px 10px;
  font-weight: 800;
  background-color: rgb(255, 211, 129);
  color: ${({ theme }) => theme.color.deep_black};
`

export const PostTocWrapper = styled.ol`
  width: 100%;
  list-style: none;
  overflow: auto;
  counter-reset: item;
`

export const ItemText = styled(Typography)`
  &:hover {
    color: red;
  }
`
export const PostTocItem = styled.li`
  display: flex;
  flex-direction: column;
  a {
    flex: 1;
    font-weight: normal;
    color: #212529;
    line-height: 1.5;

    border-left: 1px solid ${({ theme }) => theme.color.border_001};
    border-right: 1px solid ${({ theme }) => theme.color.border_001};
    border-bottom: 1px solid ${({ theme }) => theme.color.border_001};
    padding: 12px 0 12px 20px;
    &::before {
      counter-increment: item;
      content: counters(item, '.') '. ';
      color: ${({ theme }) => theme.color.point_color_003};
      padding-right: 5px;
    }
    &.head3 {
    }
    &:hover {
      background-color: ${({ theme }) => theme.color.hover_001};
    }
    @media screen and (max-width: 768px) {
      padding-left: 10px;
    }
  }
  &.head4 > a {
    padding-left: 2.5rem;
    @media screen and (max-width: 768px) {
      padding-left: 25px;
    }
  }
  &.head5 > a {
    padding-left: 100px;
    @media screen and (max-width: 768px) {
      padding-left: 35px;
    }
  }
`
