import styled, { keyframes } from 'styled-components'

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
  /* background-color: red; */
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
  width: 300px;
  text-align: left;
  padding: 0;
  color: #eee;
  transform: translate(0, -50%);

  /* display: none; */
`

export const Button = styled.button``

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
export const TitleWrapper = styled.div`
  font-size: 40px;
  font-weight: bold;
  opacity: 0;
  animation: ${showContent} 1s ease-in-out 1s 1 forwards;
`
export const SubTitleWrapper = styled.div`
  margin: 20px 0;
  opacity: 0;

  animation: ${showContent} 1s ease-in-out 0.3s 1 forwards;
`
export const SlideItem = styled.div`
  width: 250px;
  height: 300px;
  /* background-position: 50% 1/0%; */

  /* transition: 0.5s; */
  position: absolute;
  z-index: 1;
  overflow: hidden;
  top: 50%;
  transform: translate(0, -50%);
  border-radius: 20px;
  box-shadow: 5px 15px 40px 5px #505050;
  transition: 0.5s ease-in-out;

  &:nth-child(1),
  &:nth-child(2) {
    left: 0;
    top: 0;
    transform: translate(0, 0);
    border-radius: 0;
    width: 100%;
    height: 100%;
    box-shadow: none;

    ${SlideContents} {
      display: block;
      z-index: 30;
    }
  }
  &:nth-child(3) {
    left: 62%;
    top: 38%;
    z-index: 33;

    ${SlideContents} {
      left: 0;
      top: 65%;
      /* text-align: center; */

      /* z-index: 30; */
    }
  }
  &:nth-child(4) {
    left: calc(50% + 140px);
    z-index: 30;
    top: 43%;
  }
  &:nth-child(5) {
    left: calc(50% + 160px);
    z-index: 20;
    top: 48%;
  }
  &:nth-child(n + 6) {
    left: calc(50% + 660px);
    opacity: 0;
  }

  ${Button} {
    padding: 10px 20px;
    border: none;
    opacity: 0;
    animation: ${showContent} 1s ease-in-out 0.6s 1 forwards;
  }
`
export const NavigationContainer = styled.div`
  position: absolute;
  bottom: 30px;
  z-index: 222222;
  text-align: center;
  width: 100%;
`
