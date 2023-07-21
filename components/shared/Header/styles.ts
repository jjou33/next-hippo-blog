import styled from '@emotion/styled'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: saturate(180%) blur(5px);
  left: 0;
  z-index: 1100;
  width: 100vw;
  height: 80px;
  padding: 0 1rem;
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
