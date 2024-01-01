import styled, { css } from 'styled-components'
import { Typography } from 'components/common'

export const SlideContainer = styled.div`
  height: 450px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  padding: 0 2rem;
  box-shadow: ${({ theme }) => theme.color.shadow_002};
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
  color: ${({ theme }) => theme.color.deep_black};
  font-weight: 700;
  font-size: 12px;
  border-radius: 2rem;
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
    background: ${({ theme }) => theme.color.hover_002};

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
      color: ${({ theme }) => theme.color.deep_white};
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
      color: ${({ theme }) => theme.color.deep_white};
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
