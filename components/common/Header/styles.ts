import styled, { css } from 'styled-components'

import { LinkWrapper } from 'components/common/StyledLayout'

interface HeaderProps {
  isHeaderSticky: boolean
}
export const Container = styled.header<HeaderProps>`
  position: fixed;
  display: flex;
  background-color: transparent;

  width: 100%;
  top: 0;
  left: 0;
  z-index: ${({ isHeaderSticky }: { isHeaderSticky: boolean }) =>
    isHeaderSticky ? 2 : 1};
  padding: 0 1rem;

  @media screen and (min-width: 1300px) {
    width: calc(100vw - 280px);
    margin: 0 0 0 280px;
  }
`

export const HeaderWrapper = styled.div<HeaderProps>`
  position: relative;
  width: 100%;
  max-width: 996px;
  ${({ isHeaderSticky }) =>
    isHeaderSticky
      ? css`
          z-index: 2;
          margin: 0.5rem auto;
          padding: 0 2rem;
          backdrop-filter: blur(10px);
          background-color: rgba(
            255,
            255,
            255,
            0.7
          ); /* 반투명한 백그라운드 색상 */
          box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
          transition: background-color 0.3s ease; /* 트랜지션 효과 추가 */
          border-radius: 10px;
        `
      : css`
          z-index: 1;
          margin: 0 auto;
        `}
`
export const LogoWrapper = styled(LinkWrapper)`
  display: flex;
  align-items: center;
`

export const NavigationContentsWrapper = styled.nav<HeaderProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 78px;

  span {
    ${({ isHeaderSticky }: { isHeaderSticky: boolean }) =>
      isHeaderSticky
        ? css`
            color: black;
            padding: 0;
          `
        : css`
            padding: 0 2rem;
          `};
  }

  @media screen and (max-width: 768px) {
    * {
      font-size: 15px;
    }
  }
`
export const NavigationItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${({ theme }) => theme.colors.gray_005};

  &:hover {
    opacity: 0.8;
  }
`
export const HeaderMenuButton = styled.div`
  float: left;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const HeaderItemTitle = styled.div`
  margin: auto;
  font-size: 30px;
  font-weight: bold;
  padding-left: 50px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    padding-left: 0px;
  }
`
export const NavBarButtonWrapper = styled.div`
  position: absolute;
  margin-left: 10px;
  width: 30px;
  height: 30px;
  background-color: wheat;
  border-radius: 30%;
  padding-top: 2.5px;
  left: -25px;
  top: 24px;
  cursor: pointer;

  @media screen and (min-width: 1300px) {
    display: none;
  }
`
