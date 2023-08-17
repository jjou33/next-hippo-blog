import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const LinkItemIcon = styled.span`
  color: #777;
  transition: 0.5s;
  transition-delay: 0.25s;
`
export const LinkItemTitle = styled.span`
  position: absolute;
  color: #fff;
  font-size: 1rem;
  letter-spacing: 0.1em;
  transform: scale(0);
  transition: 0.5s;
  transition-delay: 0s;
`

export const LinkItemContainer = styled.ul`
  position: relative;
  display: flex;
  gap: 25px;
`

export const LinkItemWrapper = styled.li`
  position: relative;
  list-style: none;
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
  background: #fff;
  border-radius: 60px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 16px 25px rgba(0, 0, 0, 0.1);
  transition: 0.5s;

  :hover {
    width: 180px;
    box-shadow: 0 16px 25px rgba(0, 0, 0, 0.1);
    ::before {
      opacity: 1;
    }

    ::after {
      opacity: 0.5;
    }

    ${LinkItemIcon} {
      transform: scale(0);
      color: #fff;
      transition-delay: 0s;
    }

    ${LinkItemTitle} {
      transform: scale(1);
      transition-delay: 0.2s;
    }
  }

  ::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50px;
    ${({ color1, color2 }) => css`
      background: linear-gradient(45deg, ${color1}, ${color2});
    `};
    opacity: 0;
    transition: 0.5s;
  }

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 60px;
    ${({ color1, color2 }) => css`
      background: linear-gradient(45deg, ${color1}, ${color2});
    `};
    transition: 0.5s;
    filter: blur(15px);
    z-index: -1;
    opacity: 0;
  }
`
