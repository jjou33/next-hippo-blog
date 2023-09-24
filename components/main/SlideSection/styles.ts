import styled, { css, keyframes } from 'styled-components'
import { Typography } from 'components/common'

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
  /* padding: 17px 60px; */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  span {
    position: relative;
    z-index: 1;
    width: 30px;
    height: 30px;
    svg {
      width: 10px;
      height: 10px;
    }
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
    -webkit-transform: translateX(-98%) translateY(-10%) rotate(60deg);
    transform: translateX(-90%) translateY(-10%) rotate(60deg);
  }

  &:hover::after {
    -webkit-transform: translateX(-9%) translateY(-30%) rotate(60deg);
    transform: translateX(-9%) translateY(-30%) rotate(60deg);
  }
`
export const NavigationContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 0.5rem;
  bottom: 30px;
  z-index: 222222;
  width: 100%;
  left: 40%;
`

export const NavigationButton = styled.div<{ direction: string }>`
  width: 30px;
  padding: 8px;
  height: 30px;
  border-radius: 50%;
  background: white;
  ${({ direction }) =>
    direction === 'right'
      ? css`
          transform: rotate(180deg);
        `
      : ``};
  transition: 0.5s;
  cursor: pointer;
`
export const TitleWrapper = styled(Typography)`
  margin-bottom: 20px;
`
export const SubTitleWrapper = styled(Typography)`
  margin: 0 0 1rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
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
      @media screen and (max-width: 768px) {
        left: 20px;
      }
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

    @media screen and (max-width: 768px) {
      display: none;
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
const baseButtonStyles = css`
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow:
    inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
`

// Keyframes for button animation
const buttonHoverAnimation = keyframes`
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
`

const buttonSpanHoverAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`

// Styled component for the button
export const CustomButton = styled.button`
  ${baseButtonStyles}

  background: linear-gradient(
    0deg,
    rgba(255, 151, 0, 1) 0%,
    rgba(251, 75, 2, 1) 100%
  );
  line-height: 42px;
  padding: 0;
  border: none;

  span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;

    &:before,
    &:after {
      position: absolute;
      content: '';
      right: 0;
      bottom: 0;
      background: rgba(251, 75, 2, 1);
      box-shadow:
        -7px -7px 20px 0px rgba(255, 255, 255, 0.9),
        -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
        7px 7px 20px 0px rgba(0, 0, 0, 0.2),
        4px 4px 5px 0px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
    }

    &:before {
      height: 0;
      width: 2px;
    }

    &:after {
      width: 0;
      height: 2px;
    }
  }

  &:hover {
    color: rgba(251, 75, 2, 1);
    background: transparent;

    span:before {
      animation: ${buttonSpanHoverAnimation} 0.3s ease;
    }

    span:after {
      animation: ${buttonSpanHoverAnimation} 0.3s ease;
    }
  }

  &:hover:before {
    animation: ${buttonHoverAnimation} 0.3s ease;
  }

  &:hover:after {
    animation: ${buttonHoverAnimation} 0.3s ease;
  }
`
