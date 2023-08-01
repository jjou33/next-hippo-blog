import styled from '@emotion/styled'
import { LinkWrapper } from 'components/common/StyledLayout'
export const Container = styled.header`
  position: fixed;
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
`

export const LogoWrapper = styled(LinkWrapper)`
  display: flex;
  align-items: center;
`

export const NavigationContentsWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 78px;
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

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  max-width: 100%;
  height: 100%;
  margin: 0 50px;

  @media screen and (max-width: 768px) {
    margin: 0 0px;
  }
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
