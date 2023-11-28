import styled, { keyframes } from 'styled-components'
import { themedPalette } from 'styles/themeVariables'

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
   transform: rotate(2deg);
 }
 
 30% {
   transform: rotate(-2deg);
 }
 
 70% {
   transform: rotate(2deg);
 }
 100% {
   transform: rotate(-2deg);
 }
 `

export const ReadMoreBtn = styled.div`
  border-radius: 2rem;
  background-color: ${themedPalette.point_color};
  color: ${themedPalette.badge_text};
  padding: 20px 15px;
  margin: 1rem 0 0 0;
  box-shadow: 5px 10px 18px rgba(0, 0, 0, 0.1);

  &:hover {
    animation: ${shaking_in_animation} 0.5s ease;
  }
  cursor: pointer;
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
