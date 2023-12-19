import styled, { keyframes } from 'styled-components'
import theme from 'styles/theme'

export const PostListContainer = styled.div`
  @media screen and (min-width: 1000px) {
    width: 960px;
    margin: 0 auto;
  }
`
export const PostListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

export const AllPostContainer = styled.section`
  margin: 20px auto;
  min-height: calc(100vh - 258px);
`

export const ReadMoreBtnWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`

export const shaking_in_animation = keyframes`
 0% {
   transform: rotate(10deg);
 }
 
 30% {
   transform: rotate(-10deg);
 }
 
 70% {
   transform: rotate(10deg);
 }
 100% {
   transform: rotate(-10deg);
 }
 `

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
`

export const ReadMoreBtn = styled.div`
  display: flex;
  gap: 1rem;
  border-radius: 1rem;
  background-color: ${theme.color.em_color};
  color: ${theme.color.sub_text_color2};
  padding: 20px 15px;
  margin: 1rem 0 0 0;
  box-shadow: 5px 10px 18px rgba(0, 0, 0, 0.1);

  cursor: pointer;

  &:hover {
    ${IconWrapper} {
      animation: ${shaking_in_animation} 0.5s ease;
    }
  }
`

export const LottieWrapper = styled.div`
  position: absolute;
  width: 5rem;
  height: 5rem;
  left: 45%;
  top: 0;
  transform: translateX(-50%);
`

export const HeaderTextWrapper = styled.div`
  text-align: center;
`

export const Button = styled.button`
  border: none;
  text-align: center;
  padding: 1rem;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  overflow: hidden;
  position: relative;
  color: ${theme.color.styled_badge_color};
  font-weight: 700;
  font-size: 12px;
  border-radius: 2rem;
  background-color: ${theme.color.bg_element_color};
  /* padding: 17px 60px; */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  /* isolation: isolate; // safari 호환성 버그 대응 */
  z-index: 0;
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
    background: ${theme.color.wave_primary2};
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    border-radius: 2rem;
    -webkit-transform: translateX(-98%) translateY(-10%) rotate(60deg);
    transform: translateX(-90%) translateY(-10%) rotate(60deg);
  }

  &:hover::after {
    -webkit-transform: translateX(-9%) translateY(-30%) rotate(60deg);
    transform: translateX(-9%) translateY(-30%) rotate(60deg);
  }
`
