import styled from 'styled-components'

import { Typography } from 'components/common'
import theme from 'styles/theme'

export const PostTocContainer = styled.nav`
  font-size: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`

export const PostTocTitle = styled.li`
  border-top: 1px solid #d4cfcf;
  border-radius: 10px 10px 0 0;
  display: list-item;
  outline: none;
  word-break: break-all;
  padding: 10px 10px;
  font-weight: 800;
  background-color: #ffd381;
  color: #212529;
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
    border-left: 1px solid #d4cfcf;
    border-right: 1px solid #d4cfcf;
    border-bottom: 1px solid #d4cfcf;
    padding: 12px 0 12px 20px;
    &::before {
      counter-increment: item;
      content: counters(item, '.') '. ';
      color: #f0506e;
      padding-right: 5px;
    }
    &.head3 {
      background-color: rgb(246 86 96 / 3%);
    }
    &:hover {
      background-color: ${theme.color.hover_color};
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
