import styled, { css } from 'styled-components'

import { LinkWrapper } from 'components/common/StyledLayout'

interface HeaderProps {
  isHeaderSticky: boolean
}
export const Container = styled.header<HeaderProps>`
  position: fixed;
  display: flex;
  background-color: transparent;
  padding: 0.5rem;
  width: 100%;
  top: 0;
  left: 0;
  z-index: ${({ isHeaderSticky }: { isHeaderSticky: boolean }) =>
    isHeaderSticky ? 2 : 1};

  @media screen and (min-width: 1300px) {
    width: calc(100vw - 275px);
    margin: 0 0 0 260px;
  }
`

export const DarkModeToggleContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  transition: all 0.3s ease; /* 트랜지션 추가 */
  cursor: pointer;
  position: relative;
`

export const DarModeItem = styled.div<{ show: boolean }>`
  position: absolute;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${props => (props.show ? 1 : 0)}; /* 아이콘 보이기/숨기기 */
  transition: opacity 0.5s ease; /* 트랜지션 추가 */
`

export const TempBtn2 = styled.div`
  transition: 1s;
`
export const HeaderWrapper = styled.div<HeaderProps>`
  position: relative;
  width: 100%;
  max-width: 996px;
  ${({ isHeaderSticky }) =>
    isHeaderSticky
      ? css`
          z-index: 2;
          margin: 0.2rem auto;
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

export const NavBarButtonWrapper = styled.div`
  width: 40px;
  height: 40px;

  border-radius: 30%;
  padding-top: 2.5px;

  cursor: pointer;

  @media screen and (min-width: 1300px) {
    display: none;
  }
`

export const NavigationContentsWrapper = styled.nav<HeaderProps>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 60px;

  ${({ isHeaderSticky }: { isHeaderSticky: boolean }) =>
    isHeaderSticky
      ? css`
          span {
            color: black;
            padding: 0;
          }

          ${NavigationItem} {
            gap: 2rem;
          }

          ${NavBarButtonWrapper} {
            svg > path {
              stroke: #176b87;
            }
          }
        `
      : css`
          padding: 2rem;
        `};
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
    /* font-size: 20px; */
    padding-left: 0px;
  }
`
