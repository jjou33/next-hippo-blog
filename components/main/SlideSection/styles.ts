import styled, { keyframes } from 'styled-components'
import { Typography } from 'components/common'
import theme from 'styles/theme'
const showContent = keyframes`
    from {
        opacity: 0;
        transform: translate(0, 100px);
        filter: blur(33px);
    }
    to {
        opacity: 1;
        transform: translate(0, 0);
        filter: blur(0);
    }
`
export const SlideContainer = styled.div`
  height: 450px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 30px 50px #dbdbdb;
  padding: 0 2rem;
`

export const SlideWrapper = styled.div`
  width: max-content;

  margin-top: 50px;
`

export const SlideContents = styled.div`
  position: absolute;
  top: 50%;
  left: 100px;
  width: 150px;
  text-align: left;
  padding: 0;
  z-index: 3;
  color: #eee;
  transform: translate(0, -50%);
`

export const Button = styled.button`
  /* display: none; */
  border: none;
  display: none;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  overflow: hidden;
  position: relative;
  color: #000;
  font-weight: 700;
  font-size: 12px;
  border-radius: 2rem;
  background-color: wheat;
  padding: 17px 60px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  span {
    position: relative;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 490%;
    width: 140%;
    background: #78c7d2;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
    transform: translateX(-98%) translateY(-25%) rotate(45deg);
  }

  &:hover::after {
    -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
    transform: translateX(-9%) translateY(-25%) rotate(45deg);
  }
`

export const NavigationButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #555;
  transition: 0.5s;

  &:hover {
    background-color: #bac383;
  }
`
export const TitleWrapper = styled(Typography)`
  /* opacity: 0; */
  margin-bottom: 20px;
  /* animation: ${showContent} 1s ease-in-out 1s 1 forwards; */
`
export const SubTitleWrapper = styled(Typography)`
  margin: 0 0 1rem 0;
  /* opacity: 0; */
  /* white-space: nowrap; */

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  /* animation: ${showContent} 1s ease-in-out 0.3s 1 forwards; */
`

export const LeftDimmedBox = styled.div``

export const SlideItem = styled.div`
  width: 200px;
  height: 300px;

  transition: 0.5s;
  position: absolute;
  z-index: 1;
  overflow: hidden;
  top: 50%;
  transform: translate(0, -50%);
  border-radius: 20px;
  box-shadow: 5px 15px 40px 5px #505050;
  ${LeftDimmedBox} {
    height: 100%;
    position: relative;
    z-index: 2;
    background: linear-gradient(
      to bottom,
      rgba(20, 20, 20, 0) 5%,
      rgba(20, 20, 20, 0.1) 20%,
      rgba(20, 20, 20, 0.6) 70%
    );
  }
  &:nth-child(1),
  &:nth-child(2) {
    left: 0;
    top: 0;
    transform: translate(0, 0);
    border-radius: 0;
    width: 100%;
    height: 100%;
    ${LeftDimmedBox} {
      height: 100%;
      position: relative;
      z-index: 2;
      background: linear-gradient(
        to left,
        rgba(20, 20, 20, 0) 5%,
        rgba(20, 20, 20, 0.1) 50%,
        rgba(20, 20, 20, 0.6) 90%
      );
    }

    ${SlideContents} {
      display: block;
      z-index: 3;
    }
    ${Button} {
      display: block;
    }

    ${TitleWrapper} {
      font-size: 40px;

      color: ${({ theme }) => theme.colors.primary_006};
    }

    ${SubTitleWrapper} {
      font-size: 20px;
      line-height: 30px;
      width: 250px;
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
    }
  }
  &:nth-child(n + 3) {
    ${SlideContents} {
      left: 10px;
      top: 70%;
    }
    ${TitleWrapper} {
      color: ${({ theme }) => theme.colors.primary_003};
    }
    ${SubTitleWrapper} {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
  &:nth-child(3) {
    left: 50%;
  }
  &:nth-child(4) {
    left: calc(50% + 220px);
  }
  &:nth-child(5) {
    left: calc(50% + 440px);
  }
  &:nth-child(n + 6) {
    left: calc(50% + 660px);
    opacity: 0;
  }

  ${Button} {
    padding: 10px 20px;
    border: none;
  }
`
export const NavigationContainer = styled.div`
  position: absolute;
  bottom: 30px;
  z-index: 222222;
  /* text-align: center; */
  width: 100%;
`
